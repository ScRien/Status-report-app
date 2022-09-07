    const rndvNo = document.querySelector("#randevu_no");
    const hstadi = document.querySelector("#hasta_adi");
    const hstlik = document.querySelector("#hastalik");
    const ekle = document.querySelector("#ekle");
    const liste = document.querySelector("#liste");

    ekle.onclick=function(){
      if (rndvNo.value == "" || hstadi.value == "" || hastalik.value == ""){
        alert("Lütfen tüm alanları doldurun.")
        rndvNo.value = "";
        hstadi.value = "";
        hastalik.value = "";
        return false;
      }else{
        let t_randevuNo = document.createElement("td");
        let t_hastaAdi = document.createElement("td");
        let t_hastalik = document.createElement("td");
  
        t_randevuNo.textContent = randevu_no.value;
        t_hastaAdi.textContent = hasta_adi.value;
        t_hastalik.textContent = hastalik.value;

        let tr=document.createElement("tr");
        tr.appendChild(t_randevuNo);
        tr.appendChild(t_hastaAdi);
        tr.appendChild(t_hastalik);
        liste.appendChild(tr);
        randevu_no.focus();
        rndvNo.value = "";
        hstadi.value = "";
        hastalik.value = "";
      }
    }