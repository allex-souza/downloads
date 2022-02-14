window.setTimeout(carregPgms,0)
function carregPgms(){
    var progsOpen=document.getElementById('ulistPgms')
    var progsBack=document.getElementById('ulistPgms2')
    var orgProgsOpen=[
        '<li class="open">Acrobat Reader<a href="https://get.adobe.com/br/reader/download/?installer=Reader_DC_2019.008.20071_Portuguese_for_Windows&os=Windows%2010&browser_type=KHTML&browser_dist=Chrome&dualoffer=false&mdualoffer=true&cr=false&stype=7792&d=McAfee_Security_Scan_Plus&d=McAfee_Safe_Connect" target="_blank"><span>Download</span></a></li>',
        '<li class="open">Corel Draw X8 +Crack<a href="https://drive.google.com/uc?id=1t-huZsyxo1anvO4XBfBBQwU-JrlKQjrP&export=download"target="_blank"><span>Download</span></a></li>',
        '<li class="open">Office 19 + Crack<a href="office2019+crack.rar"target="_blank"><span>Download</span></a></li>',
        '<li class="open">Office 2010 +Crack<a href="https://drive.google.com/u/0/uc?export=download&confirm=0dRY&id=1uF7aP3dfrU3S1ffiyiEu7lP4Lb-MqpRx" target="_blank"><span>Download</span></a> </li>',
        '<li class="open">Nero 7<a href="progNero7.rar" target="_blank"><span>Download</span></a></li>',
        '<li class="open">TeamView<a href="https://www.teamviewer.com/pt-br/download-automatico-do-teamviewer-br/" target="_blank"><span>Download</span></a></li>',
        '<li class="open">Photoscap<a href="https://mega.nz/file/uLIUEKrA#cbv0JYtXawFfeUIAbFivf1sUnr4qFTzo8FkC-6Jx0qM"target="_blank"><span>Download</span></a></li>',
        '<li class="open">Utorrent<a href="https://mega.nz/file/uOJUVKLZ#TSXrKIBo78eQNTEuF_fge9nuGmO4KP6KLnzakcQDBCI"target="_blank"><span>Download</span></a></li>',
        '<li class="open">Allavsoft +Crack<a href="https://mega.nz/folder/CToH1AYQ#sSIdGB6vgDnynEbNGD1cgQ"target="_blank"><span>Download</span></a></li>',
        '<li class="open">VEGAS PRO 17<a href="http://download2345.mediafire.com/cxbdpgi9c5pg/3urj7zxdhm1me8r/VEGAS+PRO+17.0.0.284.rar"target="_blank"><span>Download</span></a></li>',
        '<li class="open">AutoCAD 2021 +Crack<a href="progAutoCad2021.rar" target="_blank"><span>Download</span></a></li>',
        '<li class="back">Java Up-281 <a href="https://javadl.oracle.com/webapps/download/AutoDL?BundleId=244068_89d678f2be164786b292527658ca1605" target="_blank"><span>Download</span></a></li>',
        '<li class="back">Office 2013 pré ativado <a href="https://drive.google.com/u/0/uc?id=1uF7aP3dfrU3S1ffiyiEu7lP4Lb-MqpRx&export=download" target="_blank"><span>Download</span></a></li>',
    ]
    orgProgsOpen.sort()
    progsOpen.innerHTML+=orgProgsOpen
    var orgProgsBack=[
        '<li class="back">GetDataBack<a href="getDataBack.rar" target="_blank"><span>Download</span></a></li>',
        '<li class="back">Removedor do Office<a href="progRemOffice.rar" target="_blank"><span>Download</span></a></li>',
        '<li class="back">.NET Framework Versions<a href="https://dotnet.microsoft.com/download/dotnet-framework"target="_blank"><span>Download</span></a></li>',
        '<li class="back">VMware virtual machine<a href="https://mega.nz/file/iKYwjSBa#c3rE6FbgxCU42JvxDBrbkeU1UkWCTXu0jUSDcvahUDQ"target="_blank"><span>Download</span></a></li>',
        '<li class="back">Reload Ativador<a href="https://mega.nz/file/TTBxlIJL#DrTRTjF43vW64HzJOMhYEl6gfdud3Pi5lhHWQpLFJZU"target="_blank"><span>Download</span></a></li>',
        '<li class="back">Rufus<a href="https://mega.nz/file/ObBiXAQS#iaQ-x_I5wEplBJ_EMn6V4L6rdWS1GXww0kvXwxngnJo"target="_blank"><span>Download</span></a></li>',
        '<li class="back">HW monitor<a href="http://download.cpuid.com/hwmonitor/hwmonitor_1.41.zip"target="_blank"><span>Download</span></a></li>  ',                    
        '<li class="back">HD sentinel<a href="https://www.harddisksentinel.com/hdsentinel_setup.zip"target="_blank"><span>Download</span></a></li>',
        '<li class="back">Itools 4.4<a href="https://mega.nz/file/GOQAxARC#_4P4xXoHVd3Da3WPZK-xcaYNPTNv8dkN_zCPIayF-0E"target="_blank"><span>Download</span></a></li><li>itools 3.4<a href="https://mega.nz/file/eCAQVa6Z#fLxynjp6D7uW-7FTL3w5e2pyblBDY_OD9U-7OpT9bfg"target="_blank"><span>Download</span></a></li>',
        '<li class="back">FPS monitor<a href="https://mega.nz/file/SKYUUCyb#9cwS9sTQDE2HTt4TqTv8A-JyhzuCLjw0BRsqpDwaggc"target="_blank"><span>Download</span></a></li>',
        '<li class="back">Daemon Tools<a href="https://mega.nz/file/uaQUHKTR#rrVnefW7YyJNIrCb_XTiS3MaYRNU0QVkyr7TF8QrQZA"target="_blank"><span>Download</span></a></li>',
        '<li class="back">Unloock Wind User<a href="https://drive.google.com/u/0/uc?export=download&confirm=lurs&id=1owJ1B1owZZyY5aZRw0uGQW8Cw-9BkRwz"target="_blank"><span>Download</span></a></li>',
        '<li class="back">iTunes<a href="https://support.apple.com/kb/DL1816?viewlocale=pt_BR&locale=pt_BR" target="_blank"><span>Download</span></a></li>',
        '<li class="back">Ativador Office 2010<a href="https://mega.nz/file/MTBmAYQL#cNljX8xqS74GezRZMLoQI6yqBsQ6iLVhhm1HBBAtxkw" target="_blank"><span>Download</span></a></li>'
    ]
    orgProgsBack.sort()
    progsBack.innerHTML+=orgProgsBack
    var orgProgsAmbs=[
        '<li class="ambs">Winrar<a href="https://www.rarlab.com/rar/winrar-x64-580br.exe" target="_blank"><span>Download</span></a></li>',
        '<li class="ambs">Panda Dome Free<a href="https://repository.pandasecurity.com/Panda//FREEAV/191048/PANDAFREEAV.exe?_ga=2.261393485.1700817990.1613868967-2075854321.1613868967&_gac=1.151111371.1613868982.CjwKCAiAg8OBBhA8EiwAlKw3kqJWjx-Ko_po6z5DyvEr2IiwrGw2UfdXJ4Cj3ti9k7_ZiCgnddOyeRoCRYUQAvD_BwE" target="_blank"><span>Download</span></a></li>',
    ]
    orgProgsAmbs.sort()
    progsBack.innerHTML+=orgProgsAmbs
    progsOpen.innerHTML+=orgProgsAmbs
}
// Organização sessão download programas -----------------------------------------------------------------------------------------------------------
function subWhats() {
    var gerarUrl = document.getElementById("entraNum").value
     var mesgOpc = document.getElementById("msgOpc").value
    var vaurlPta = "https://api.whatsapp.com/send?phone=55" + gerarUrl + '&text=' + mesgOpc;
    if(gerarUrl ==''){
        alert(`Número inválido!`)
    }
    else(window.open(vaurlPta))
    }
    function copyUrl(){
    var gerarUrl = document.getElementById("entraNum").value
     var mesgOpc = document.getElementById("msgOpc").value
    var vaurlPta = "https://api.whatsapp.com/send?phone=55" + gerarUrl + '&text=' + mesgOpc;
    if(gerarUrl == ''){
        alert(`Número inválido!`)
    }
    if(gerarUrl != ''){
        var inpPt = document.getElementById('urlPtaCp').value=vaurlPta
}
}	
src="https://code.jquery.com/jquery-3.2.1.min.js"
    $(function(){
    $("#whatsCp").click(function(){
        $('#urlPtaCp').select()
        document.execCommand("copy");
        alert('Pronto! Agora você ja pode colar seu link onde desejar :)')
    })
})
var cxtuto = document.getElementById('tutoWh')
window.setTimeout(cxvai,5000)
function cxvai(){
    cxtuto.style.display='block'
}
function fechatutowh(){
    document.getElementById('tutoWh').style.display='none'
}
function alertButs(){
    alert("Temporariamente indisponível...")
}
