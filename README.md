document.getElementById("random").onclick=()=>{
    const valueRandom=Math.random();
    const value=Math.floor(Math.random() * 4);
    switch(value){
        case 0:
            document.getElementsByTagName("h3")[0].innerText="Trâm Anh";
            break
        case 1:
        document.getElementsByTagName("h3")[0].innerText="Thanh Trúc";
            break
        case 2:
            document.getElementsByTagName("h3")[0].innerText="Hàng My";
            break
        case 3:
            document.getElementsByTagName("h3")[0].innerText="Linh Nhi";
            break
    }
   


