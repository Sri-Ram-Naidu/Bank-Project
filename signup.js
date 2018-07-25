function takingData()
{
	if(localStorage.getItem('sri')!=null)
	{
		var dataFromLS=JSON.parse(localStorage.getItem('sri'));
		console.log(dataFromLS.length);
	}
}




function signupFun()
{
	var name=document.getElementById('name').value;
	var mobile=document.getElementById('num1').value;
	var aadhar=document.getElementById('num2').value;
	var email=document.getElementById('mail').value;
	var password =document.getElementById('pwd').value;
	console.log(name,mobile,aadhar,email,password);

	var muluser=[];
	var user=
	{
		"name":name,
		"mobile":mobile,
        "aadhar":aadhar,
		"email":email,
		"password":password
	}

	localStorage.getItem('sri');
	if(localStorage.getItem('sri')!=null)
	{
		var dataFromLS=JSON.parse(localStorage.getItem('sri'));
		console.log(dataFromLS);
		muluser.push(user);
		for(var i=0; i<dataFromLS.length; i++)
		{
			muluser.push(dataFromLS[i]);
		}
		localStorage.setItem("sri",JSON.stringify(muluser));

	}
	else
	{
		muluser.push(user);
		localStorage.setItem("sri",JSON.stringify(muluser));
	}
}

