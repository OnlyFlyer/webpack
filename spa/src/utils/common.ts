export const sleep = (duration: number) => new Promise((resolve: any, reject: any) => {
  setTimeout(resolve, duration)
})

export const add = (x: number, y: number) => x + y