function pointInFigure(input) {
    let h = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());;

    let outRect1 = x < h || x > 2*h || y > 4*h || y < h;
    let outRect2 = x < 0 || x > 3*h || y < 0 || y > h;

    let inRect1 = x > h && x < 2*h && y < 4*h && y > h;
    let inRect2 = x > 0 && x < 3*h && y > 0 && y < h;

    let commonBorder = x > h && x < 2*h && y == h ;

    if (outRect1 && outRect2) {
        console.log('outside');
    } else if (inRect1 || inRect2 || commonBorder){
        console.log('inside');
    } else {
        console.log('border');
    }
}

pointInFigure([2, 3, 1]);