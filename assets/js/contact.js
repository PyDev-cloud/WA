
function sendEmail(){
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const message=document.getElementById('message').value.trim();
  if(!name||!email||!message){alert('Please fill required fields.');return false;}
  const subject=encodeURIComponent('Website Contact: '+name);
  const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\n\nMessage:\n'+message);
  const mailto='mailto:info@itservicewa.com.au?subject='+subject+'&body='+body;
  window.location.href=mailto;
  return false;
}
