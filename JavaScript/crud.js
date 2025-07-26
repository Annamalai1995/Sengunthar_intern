let College=new Array('Sengunthar','Psg','Karpagam','Sona','Srm','Vit')

let Add=()=>
{
    let newvalue=document.getElementById('college').value;
    College.push(newvalue)
    alert(newvalue+"ADDED SUCCESSFULLY")
    List()


}
let List=()=>
{
    let temp=""
    College.map((getting)=>
    {

        temp+="<tr><td><ul><li>"+getting+"</li></ul></td></tr>";
    })
    document.getElementById('list').innerHTML="<table><thead bgcolor='green'><tr><th>College_Names</th></tr></thead><tbody bgcolor='pink' align='center'>"+temp+"</tbody></table>";
}

let Update=()=>
{
    let updateindex=document.getElementById('college').value
    let newvalue=prompt("Tell us college name"+College)
    College[updateindex]=newvalue
    List()
}
let Delete=()=>
{
    let delete_value=document.getElementById('college').value
    College=College.filter((getting)=>
    {
        if(getting!==delete_value)
        {
            return getting
        }
    })
    List()
}

let Search=()=>
{
    let search=document.getElementById('college').value
    for(i=0;i<College.length;i++)
    {
        if(College[i]===search)
        {
            return i
        }
    }

}
let First=()=>
{
    let search=document.getElementById('college').value
    for(i=0;i<College.length;i++)
    {
       alert("CollegeName"+College[i]);
       break;
    }

}