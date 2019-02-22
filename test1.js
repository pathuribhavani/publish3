function volume(input1,input2,input3){
    length = input1;
    base = input2;
    height = input3;
    let volume;
    if(length<0||base<0||heigth<0){
        volume=0;
}        
else if(base<0||height<0){
        volume=0;
}
else if(base>250||height>250){
    volume=0;
}
else{
    volume=(length)*(base)*(height);
}
return volume;
    
 }