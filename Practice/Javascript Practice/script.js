function numberVowels(x)
{
    let vowels="aeiouAEIOU";
    let n=0;
    for(let i=0;i<x.length;i++)
    {
        for(let j=0;j<vowels.length;j++)
        {
            if(x.charAt(i)==vowels.charAt(j))
                n++;
        }
    }
    return n;
}
let str=prompt("Enter a string to find out the nuumber of vowels");
alert("The number of vowels in the string is "+numberVowels(str));