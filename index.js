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
else if(input_val=='binary')
{
    input_div.innerHTML=` <label for="bin">Enter a Binary Number :</label><br>
                <input type="text" id="bin">`
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
      let val=document.getElementById('bin').value 
      let dec_val=Binary_To_Decimal(val)
      console.log(dec_val)
      let out_dec=document.getElementById('out_dec')
      out_dec.value=dec_val.toString()
    }
    else if(input_val=='decimal' && output_val=='binary')
    {
        let val=document.getElementById('in_dec').value 
        let bin_val=Decimal_To_Binary(val)
        let out_bin=document.getElementById('out_bin')
        out_bin.value=bin_val
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
     b-=1
     sum+=c
    }
    return sum
}
function Decimal_To_Binary(a)
{
  let b=parseInt(a)
  let result=''
   console.log(b)
  while(b>0)
  {
   let r=b%2
   result=result+(r.toString())
    console.log(result)
   b=parseInt(b/2)
  }
  rev_result=result.split('').reverse().join('')
  return rev_result
}


