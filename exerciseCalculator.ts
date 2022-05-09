interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number
}

interface parsedValues {
    targetValue: number;
    inputValues: Array<number>
}


const exerciseParseArguments = (args: Array<string>): parsedValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 12) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            targetValue: Number(args[2]),
            inputValues: args.slice(3).map(x => Number(x))
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};

export const calculateExercises = (inputValues: Array<number>, targetAmount: number): ExerciseResult => {
    const trainingDays: number = inputValues.filter(x => x !== 0).length;
    const average: number = inputValues.reduce((partialSum, a) => partialSum + a, 0) / inputValues.length;
    // eslint-disable-next-line no-constant-condition
    const success: boolean = true ? average > targetAmount : false;

    let rating: number;
    let ratingDescription: string;
    if (average > targetAmount) {
        rating = 3;
        ratingDescription = "good";
    } else if (average === targetAmount) {
        rating = 2;
        ratingDescription = "not bad";
    } else {
        rating = 1;
        ratingDescription = "bad";
    }

    const result: ExerciseResult = {
        periodLength: inputValues.length,
        trainingDays: trainingDays,
        average: average,
        target: targetAmount,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription
    };
    return result;
};


try {
    const { targetValue, inputValues } = exerciseParseArguments(process.argv);
    console.log(calculateExercises(inputValues, targetValue));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}