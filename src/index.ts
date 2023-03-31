const world = "world";

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

function main() {
  console.log(hello(process.argv[2]));
}

main();
