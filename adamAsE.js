/* BBY261 Adam Asmaca Uygulaması Ertuğrul Danacı*/

var kelimeler = [
    { kelime: 'kütüphane', ipucu: 'Bir tür bilgi merkezi' },
    { kelime: 'arşiv', ipucu: 'Belgelerin yaşam döngüsünü tamamladıktan sonra başlayan süreç' },
    { kelime: 'ünak', ipucu: 'Üniversite ve Araştırma Kütüphanecileri Derneği (kısa)' },
	{ kelime: 'knowledge', ipucu: 'Deneyimlerimizden oluşan ve başkasına aktarılamayan bilgi türü (İngilizce)' },
    { kelime: 'ulaşım', ipucu: 'Beytepe Kampüsünün en büyük sıkıntısı' },
    { kelime: 'dizin', ipucu: 'Aradığınız konuyu kitabın içinde çabucak bulmanıza yardımcı olan şey' },
	{ kelime: 'gazeteer', ipucu: 'Coğrafi bilgi veren bir tür danışma kaynağı'},
	{ kelime: 'yakınsama', ipucu: 'Teknolojilerin fingirdeşmesi, iç içe geçmesi'},
	{ kelime: 'veri', ipucu: 'İşlenmemiş ham bilgi'},
	{ kelime: 'data', ipucu: 'İşlenmemiş ham bilgi (İngilizce)'},
	{ kelime: 'telefon', ipucu: 'Beş yıl sonra insanların organı haline gelecek olan elektronik cihaz'},
];
var alfabe =["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","w","x","y","z"];
var secilenArr = kelimeSec()
var secilenKelime = secilenArr[0]
var secilenIpucu = secilenArr[1]
var uzunluk = secilenKelime.length
var hataSayisi = 0;
var kelimeDizi = new Array();

function hazirla(){
	if(uzunluk > 18){
		document.getElementById('kelime').style.fontSize = 400/uzunluk
	}
	for(var i=0; i<uzunluk; i++){
		kelimeDizi.push("_")
		document.getElementById('kelime').innerHTML += "<b>" + kelimeDizi[i] + " </b>"
    }
	document.getElementById('ipucu').innerHTML += "</br>" + secilenIpucu + " </br></br>"
    adamAs()
    alfabeGoster()
	document.getElementById('uyari').innerHTML = "Başlamak için bir harfe dokun..."
}

function kelimeSec(){
	var index = Math.floor(Math.random() * kelimeler.length)
	return [kelimeler[index].kelime,kelimeler[index].ipucu]
}


function harfKonumu(harf){
	var dizi = secilenKelime.split("")
	var bulunan = new Array();
	for(var i=0; i<dizi.length; i++){
		if(dizi[i] == harf){
    		bulunan.push(i)
    	}
	}
return bulunan;
}

function varmi(harf){
    document.getElementById('kelime').innerHTML = ""
    document.getElementById(harf).innerHTML = ""
	if(harfKonumu(harf) == "" ){
        harfYok()
    }
    for(var i=0; i<uzunluk; i++){
            if(harfKonumu(harf).indexOf(i) == -1){
            	document.getElementById('kelime').innerHTML += "<b>" +kelimeDizi[i] + " </b>"
    		}
            else{
				document.getElementById('uyari').innerHTML = "Harf var :)"
				kelimeDizi[i] = harf;
            	document.getElementById('kelime').innerHTML += "<b>" +kelimeDizi[i] + " </b>"
				if(kelimeDizi.indexOf("_") == -1){
					document.getElementById('uyari').innerHTML="Tebrikler, Oyunu kazandınız!"
					document.getElementById('alfabe').innerHTML=""
				}
            }
	}
}

function harfYok(){
	document.getElementById('uyari').innerHTML = "Harf yok :("
	hataSayisi = hataSayisi + 1
	if(hataSayisi == 6){
		document.getElementById('uyari').innerHTML = "Adam Asıldı!"
		// Buraya oyunu yeniden başlatma butonu koyulacak
		document.getElementById('alfabe').innerHTML = ""

		for(var i=0; i<alfabe.lengt; i++){
			document.getElementById('alfabe').innerHTML += '<p  id="' + alfabe[i] + '">' + alfabe[i] + ' </a>';
		}
	}
	adamAs()
}

function adamAs(){
	switch(hataSayisi) { // Resimleri değiştiren fonksiyon
    	case 0:
        	document.getElementById('adaminResmi').src="0.png"
        break;
    	case 1:
        	document.getElementById('adaminResmi').src="1.png"
        break;
		case 2:
			document.getElementById('adaminResmi').src="2.png"
		break;
		case 3:
			document.getElementById('adaminResmi').src="3.png"
		break;
		case 4:
			document.getElementById('adaminResmi').src="4.png"
		break;
		case 5:
			document.getElementById('adaminResmi').src="5.png"
		break;
		case 6:
			document.getElementById('adaminResmi').src="6.png"
		break;
	}
}

function alfabeGoster(){ // Alfabeyi gösteren fonksiyon
	for(var i=0; i<alfabe.length; i++){
		document.getElementById('alfabe').innerHTML += '<a class="harfler" id="' + alfabe[i] + '" href="javascript:varmi(' + "'" +  alfabe[i] + "'" + ')">' + alfabe[i] + ' </a>';
    }
}
