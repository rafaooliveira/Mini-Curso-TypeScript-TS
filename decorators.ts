// decorators é embassado function com parametros default
// target é o constructor da nossa classe vai vendo pai 
// factiory para criar um decorator

function Logger(prefix: string) {
  console.log(prefix)
  return (target: any) => {
    console.log(`${prefix} - ${target}`)
  }
}

@Logger("awesome") // decorator
class Foo {}


// decorator - anotar a versão da API, JÁ CRIAR api com versão.
function setAPIVersion(apiVersion: string) {
  return (target: any) => {
    return class extends target {
      version = apiVersion
    }
  }
}
@setAPIVersion("2.0.0")
class api {}
console.log(new api())




// property decorator
function minLength(length: number) {
  return (target: any, key: string) => { //key é a propriedade que vamos trampar no caso pe o title
    let val = target[key]

    const getter = () => val;
    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`error: vc n pode criar ${key} com tamanjo menor que ${length}`)
      } else {
        val = value
      }
    }
    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    }) 
  }
}
class Movie {
  //validar - se for menor que 5 - error
  @minLength(5)
  title: string;
  constructor(t: string) {
    this.title = t
  }
}
const movie = new Movie("Interstellar")
console.log(movie.title)





// Method Decorator funçao com delay podemos usar pra ping 
function delay(ms: number) {
  return(target: any, key: string, descriptor: PropertyDescriptor) => { // funcoes do metodo
    console.log(target)
    console.log(key)
    console.log(descriptor)
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any) {
      console.log(`esperando ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)
      return descriptor
    }
  }
}
class Greeter {
  greeting: string;
  constructor(g: string) {
    this.greeting = g 
  }
  // esperar e chamar o metodo
  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}`)
  }
}

const pessoinha = new Greeter("pessoinha")
pessoinha.greet();
