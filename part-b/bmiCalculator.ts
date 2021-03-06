interface bmiValues  {
    height: number;
    weight: number;
}

let bmiMessage: string;

const bmiParseArguments = (args: Array<string>): bmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

export const calculateBmi = (height: number, weight: number) : string =>{
    const bmiValue =  weight / (height * height * 0.0001);

    if (bmiValue <= 16.0) {
      bmiMessage = "Underweight (Severe thinness)";
      // return("Underweight (Severe thinness)")
      // console.log("Underweight (Severe thinness)");
    }else if (bmiValue < 16.9 && bmiValue > 16.0) {
      bmiMessage = "Underweight (Moderate thinness)";
      // return("Underweight (Moderate thinness)")
      // console.log("Underweight (Moderate thinness)");
    }else if (bmiValue < 18.4 && bmiValue > 17.0) {
      bmiMessage = "Underweight (Mild thinness)";
      // return("Underweight (Mild thinness)")
      // console.log("Underweight (Mild thinness)");
    }else if (bmiValue < 24.9 && bmiValue > 18.5) {
      bmiMessage = "Normal range";
      // return("Normal range")
      // console.log("Normal range");
    } else if (bmiValue < 29.9 && bmiValue > 25.0) {
      bmiMessage = "Overweight (Pre-obese)";
      // return("Overweight (Pre-obese)")
      // console.log("Overweight (Pre-obese)");
    } else if (bmiValue < 35.0 && bmiValue > 39.9) {
      bmiMessage = "Obese (Class II)";
      // return("Obese (Class II)")
      // console.log("Obese (Class II)");
    } else if (bmiValue > 40.0) {
      bmiMessage = "Overweight (Pre-obese)";
      // return("Overweight (Pre-obese)")
      // console.log("Overweight (Pre-obese)");
    }

    return bmiMessage;
}

try {
  const { height, weight } = bmiParseArguments(process.argv);
  calculateBmi(height, weight);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
