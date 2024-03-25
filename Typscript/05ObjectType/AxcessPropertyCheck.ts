// @errors: 2345 2739
interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
  
  let mySquare = createSquare({ color: "red", width: 100 });
  
  console.log(createSquare(mySquare))