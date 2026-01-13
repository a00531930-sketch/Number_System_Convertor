let input_val='binary'
let output_val='decimal'
function Get_Input_Val(){
let input_div=document.getElementById('input')
input_val=document.getElementById('input_val').value 
if(input_val=='decimal')
{
input_div.innerHTML=`<label for="in_dec">Enter a Decimal Number :</label><br>
                <input type="text" id="in_dec">`
}
else if(input_val=='octal')
{
    input_div.innerHTML=`<label for="in_oct">Enter a Octal Number :</label><br>
                <input type="text" id="in_oct">`
}
else if(input_val=='hex')
{
    input_div.innerHTML=`<label for="in_hex">Enter a Hexadecimal Number :</label><br>
                <input type="text" id="in_hex">`
}
}
function Get_Output_Val(){
let output_div=document.getElementById('output')
output_val=document.getElementById('output_val').value 
if(output_val=='binary')
{
output_div.innerHTML=`<label for="out_bin">Binary Number :</label><br>
                <input type="text" id="out_bin">`
}
else if(output_val=='decimal')
{
    output_div.innerHTML=`<label for="out_dec">Decimal Number :</label><br>
                <input type="text" id="out_dec">`
}
else if(output_val=='octal')
{
    output_div.innerHTML=`<label for="out_oct">Octal Number :</label><br>
                <input type="text" id="out_oct">`
}
else if(output_val=='hex')
{
    output_div.innerHTML=`<label for="out_hex">Hexadecimal Number :</label><br>
                <input type="text" id="out_hex">`
}
}
function Convert_function(){
    if(input_val=='binary' && output_val=='decimal')
    {
      let dec_val=Binary_To_Decimal(input_val)
      console.log(dec_val)
    }
}
function Binary_To_Decimal(a)
{
    let len=a.length
    let b=len-1
    let sum=0
    for(let i=0;i<len;i++)
    {
     let c=(Math.pow(2,b))*parseInt(a[i])
     sum+=c
    }
    return sum
}

