function deteminerTopper(jim, dela, chinku){
    if(jim>=dela && jim>=chinku){
        return'Jim is topper so she is get the cake';
    }
    else if(dela>=jim && dela>=chinku ){
        return 'dela is topper so she is get the cake'
    }
    else{
        return 'chinku is topper so she is get the cake'
    }
    }
    const jim = 84;
    const dela = 99;
    const chinku = 77;
    console.log(deteminerTopper(jim, dela, chinku));