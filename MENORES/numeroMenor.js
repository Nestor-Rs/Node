function numeroMenor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "números iguales";
    }
    else if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    } 
    else {
      return num3;
    }
  }