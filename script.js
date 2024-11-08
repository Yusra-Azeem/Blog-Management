let div_id=0;
function remove(){
    document.getElementById('heading'+div_id).remove()
    document.getElementById('para'+div_id).remove()
    document.getElementById('pr'+div_id).remove()
    

}
function uploadblog(h,p,pr){
    console.log("uploading...")
    let div=document.getElementById("d"+div_id)
    
    let heading=document.createElement('h2')
    heading.textContent=h;
    heading.style.backgroundColor='rgb(6, 143, 97)'
    heading.style.textAlign='center'
    heading.style.display='flex'
    heading.style.justifyContent='center'
    heading.style.color='white'
    heading.style.alignItems='center'
    div.appendChild(heading)
    //h.remove()
    
    let para=document.createElement('p') 
    para.textContent=p;
    para.style.backgroundColor='rgb(30, 248, 70)'
    div.appendChild(para)
    //p.remove()
    
    let price=document.createElement('h2')
    price.textContent=pr;
    price.style.backgroundColor='red'
    price.style.padding='5px'
    price.style.textAlign='center'
    price.style.display='flex'
    price.style.justifyContent='center'
    price.style.alignItems='center'
    //pricing.remove()
    div.appendChild(price)
    
    remove()
    
    
}

function addcontent(){
    console.log('addcontent')
    
    let h=document.getElementById('heading'+div_id).value
    let p=document.getElementById('para'+div_id).value
    let pr=document.getElementById('pr'+div_id).value
    uploadblog(h,p,pr)
}
function input(){
    let div=document.createElement('div')
    div.classList.add('div')
    div.id="d"+div_id
    document.getElementById('container').appendChild(div)
    
    let h=document.createElement('input')
    h.type='text'
    h.placeholder='Enter Topic'
    h.id='heading'+div_id
    
    div.appendChild(h)

    let p=document.createElement('textarea')
    p.placeholder='Enter Blog content'
    p.id='para'+div_id
    p.type='text'
    p.rows=6
    p.cols=30
    div.appendChild(p)
    
    let pricing=document.createElement('input')
    pricing.type='text'
    pricing.placeholder='Enter Topic'
    pricing.id='pr'+div_id
    div.appendChild(pricing)
    let btn=document.createElement('button')
    
btn.classList.add("confirm")
btn.innerHTML='<span class="txt">Save</span>'
div.appendChild(btn)
btn.addEventListener("click",()=>{
    btn.remove()
    addcontent()
})

    
    
    // h.addEventListener('change',()=>{
        
    //     let hval=h.value
    //     let pval=p.value
        
    //     uploadblog(hval,pval,'')
    // })
   // document.getElementById('heading').style.visibility='hidden'
}



function saveblog(){
    console.log("saving...")
}
function deleteblog(){
    console.log("deleting...")
}
function editblog(){
    console.log("Ready to edit")
}

let header=document.getElementById('header')
let btn=document.createElement('button')
btn.classList.add("button")
btn.innerHTML='<span class="txt">Upload Blog</span>'
btn.addEventListener("click",()=>{
    div_id++;
    input.call()
    
})
header.appendChild(btn)



