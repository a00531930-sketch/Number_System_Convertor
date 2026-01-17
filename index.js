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
      let oct_val=Decimal_To_Octal(dec_val)
      let hex_val=Decimal_To_Hex(dec_val)
      let remaining_div=document.getElementById('remainig_system')
      remaining_div.innerHTML=` <div class="left_cont">
      <label for="octal">Octal Number : </label><br>
            <textarea>${oct_val}</textarea></div>
        <div class="right_con"><label for="hex">Hex Number : </label><br>
            <textarea>${hex_val}</textarea></div>`

    }
    else if(input_val=='decimal' && output_val=='binary')
    {
        let val=document.getElementById('in_dec').value 
        let bin_val=Decimal_To_Binary(val)
        let out_bin=document.getElementById('out_bin')
        out_bin.value=bin_val
        let oct_val=Decimal_To_Octal(val)
        let hex_val=Decimal_To_Hex(val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
      <label for="octal">Octal Number : </label><br>
            <textarea>${oct_val}</textarea></div>
        <div class="right_con"><label for="hex">Hex Number : </label><br>
            <textarea>${hex_val}</textarea></div>`
    }
    else if(input_val=='octal' && output_val=='decimal')
    {
        let val=document.getElementById('in_oct').value 
        let dec_val=Octal_To_Decimal(val)
        let out_dec=document.getElementById('out_dec')
        out_dec.value=dec_val
        let bin_val=Decimal_To_Binary(dec_val)
        let hex_val=Decimal_To_Hex(dec_val)
        let remaining_div=document.getElementById('remainig_system')
      remaining_div.innerHTML=` <div class="left_cont">
      <label for="binary">Binary Number : </label><br>
            <textarea>${bin_val}</textarea></div>
        <div class="right_con"><label for="hex">Hex Number : </label><br>
            <textarea>${hex_val}</textarea></div>`
    }
    
    else if(input_val=='decimal' && output_val=='octal')
    {
        let val=document.getElementById('in_dec').value
        let oct_val=Decimal_To_Octal(val)
        let out_oct=document.getElementById('out_oct')
        out_oct.value=oct_val
        let bin_val=Decimal_To_Binary(val)
        let hex_val=Decimal_To_Hex(val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
      <label for="binary">Binary Number : </label><br>
            <textarea>${bin_val}</textarea></div>
        <div class="right_con"><label for="hex">Hex Number : </label><br>
            <textarea>${hex_val}</textarea></div>`
        
    }
    else if(input_val=='hex' && output_val=='decimal')
    {
        let val=document.getElementById('in_hex').value
        let dec_val=Hex_To_Decimal(val)
        let out_dec=document.getElementById('out_dec')
        out_dec.value=dec_val
        let bin_val=Decimal_To_Binary(dec_val)
        let oct_val=Decimal_To_Octal(dec_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="binary">Binary Number : </label><br>
            <textarea>${bin_val}</textarea></div>
        <div class="right_con"><label for="oct">Octal Number : </label><br>
            <textarea>${oct_val}</textarea></div>`
        
    }
     else if(input_val=='decimal' && output_val=='hex')
    {
        let val=document.getElementById('in_dec').value
        let hex_val=Decimal_To_Hex(val)
        let out_hex=document.getElementById('out_hex')
        out_hex.value=hex_val
        let bin_val=Decimal_To_Binary(val)
        let oct_val=Decimal_To_Octal(val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="binary">Binary Number : </label><br>
            <textarea>${bin_val}</textarea></div>
        <div class="right_con"><label for="oct">Octal Number : </label><br>
            <textarea>${oct_val}</textarea></div>`
        
    }
     else if(input_val=='binary' && output_val=='hex')
    {
        let val=document.getElementById('bin').value
        let dec_val=Binary_To_Decimal(val)
        let hex_val=Decimal_To_Hex(dec_val)
        console.log(dec_val)
        console.log(hex_val)
        let out_hex=document.getElementById('out_hex')
        out_hex.value=hex_val
        let d_val=dec_val
        let oct_val=Decimal_To_Octal(d_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="dec">Decimal Number : </label><br>
            <textarea>${d_val}</textarea></div>
        <div class="right_con"><label for="oct">Octal Number : </label><br>
            <textarea>${oct_val}</textarea></div>`
    }
    else if(input_val=='hex' && output_val=='binary')
    {
        let val=document.getElementById('in_hex').value
        let dec_val=Hex_To_Decimal(val)
        let bin_val=Decimal_To_Binary(dec_val)
        let out_bin=document.getElementById('out_bin')
        out_bin.value=bin_val
        let d_val=dec_val
        let oct_val=Decimal_To_Octal(d_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="dec">Decimal Number : </label><br>
            <textarea>${d_val}</textarea></div>
        <div class="right_con"><label for="oct">Octal Number : </label><br>
            <textarea>${oct_val}</textarea></div>`
    }
    else if(input_val=='binary' && output_val=='octal')
    {
        let val=document.getElementById('bin').value
        let dec_val=Binary_To_Decimal(val)
        let oct_val=Decimal_To_Octal(dec_val)
        let out_oct=document.getElementById('out_oct')
        out_oct.value=oct_val
        let d_val=dec_val
        let hex_val=Decimal_To_Hex(d_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="dec">Decimal Number : </label><br>
            <textarea>${d_val}</textarea></div>
        <div class="right_con"><label for="hex">Hex Number : </label><br>
            <textarea>${hex_val}</textarea></div>`
    }
    else if(input_val=='octal' && output_val=='binary')
    {
        let val=document.getElementById('in_oct').value
        let dec_val=Octal_To_Decimal(val)
        let bin_val=Decimal_To_Binary(dec_val)
        let out_bin=document.getElementById('out_bin')
        out_bin.value=bin_val
        let d_val=dec_val
        let hex_val=Decimal_To_Hex(d_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="dec">Decimal Number : </label><br>
            <textarea>${d_val}</textarea></div>
        <div class="right_con"><label for="hex">Hex Number : </label><br>
            <textarea>${hex_val}</textarea></div>`
    }
    else if(input_val=='hex' && output_val=='octal')
    {
        let val=document.getElementById('in_hex').value
        let dec_val=Hex_To_Decimal(val)
        let oct_val=Decimal_To_Octal(dec_val)
        let out_oct=document.getElementById('out_oct')
        out_oct.value=oct_val
        let d_val=dec_val
        let bin_val=Decimal_To_Binary(d_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="dec">Decimal Number : </label><br>
            <textarea>${d_val}</textarea></div>
        <div class="right_con"><label for="bin">Binary Number : </label><br>
            <textarea>${bin_val}</textarea></div>`
    }
    else if(input_val=='octal' && output_val=='hex')
    {
        let val=document.getElementById('in_oct').value
        let dec_val=Octal_To_Decimal(val)
        let hex_val=Decimal_To_Hex(dec_val)
        let out_hex=document.getElementById('out_hex')
        out_hex.value=hex_val
        let d_val=dec_val
        let bin_val=Decimal_To_Binary(d_val)
        let remaining_div=document.getElementById('remainig_system')
        remaining_div.innerHTML=` <div class="left_cont">
        <label for="dec">Decimal Number : </label><br>
            <textarea>${d_val}</textarea></div>
        <div class="right_con"><label for="bin">Binary Number : </label><br>
            <textarea>${bin_val}</textarea></div>`
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
function Octal_To_Decimal(a)
{
    let l=a.length
    let len=l-1
    let sum=0
    for(let i=0;i<l;i++)
    {
      let temp=parseInt(a[i])
      let x=Math.pow(8,len)*temp
      sum+=x 
      len-=1
    }
    return sum
}
function Decimal_To_Octal(a)
{
    let b=parseInt(a)
    let result=''
    while(b>0)
    {
        let r=b%8
        result=result+(r.toString())
        b=parseInt(b/8)
    }
    rev_result=result.split('').reverse().join('')
    return rev_result

}
function Hex_To_Decimal(a)
{
    let l=a.length
    let len=l-1
    let sum=0
    for(let i=0;i<l;i++)
    {
      let v=a[i]
      let p=Math.pow(16,len)
      if(v=='A' || v=='B' || v=='C' || v=='D' || v=='E' || v=='F')
      {
        let temp=Hex_Value(v)
        sum+=(p*temp)

      }else{
        let temp=parseInt(v)
        sum+=(p*temp)
      }
      len-=1
    }
    return sum
}
function Hex_Value(x)
{
    if(x=='A')
    {
        return 10
    }
    else if(x=='B')
    {
        return 11
    }
    else if(x=='C')
    {
        return 12
    }
    else if(x=='D')
    {
        return 13
    }
    else if(x=='E')
    {
        return 14
    }
    else{
        return 15
    }
}
function Reverse_Hex_Value(x)
{
    if(x==10)
    {
        return 'A'
    }
    else if(x==11)
    {
        return 'B'
    }
    else if(x==12)
    {
        return 'C'
    }
    else if(x==13)
    {
        return 'D'
    }
    else if(x==14)
    {
        return 'E'
    }
    else{
        return 'F'
    }
}
function Decimal_To_Hex(a)
{
    let b=parseInt(a)
    let result=''
    while(b>0)
    {
        let r=b%16
        if(r>9)
        {
            let temp=Reverse_Hex_Value(r)
            result=result+temp
        }else{
           result=result+(r.toString())
        }
        
        b=parseInt(b/16)
    }
    rev_result=result.split('').reverse().join('')
    return rev_result
}

