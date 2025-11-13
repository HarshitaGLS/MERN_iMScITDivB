export const add = (a,b) => a+b
const div = (a,b) =>a/b
export const name = "GLS"

function fact(n){
    if(n==1) return 1
    else return n*fact(n-1)
}

export default fact
// export {name,add}