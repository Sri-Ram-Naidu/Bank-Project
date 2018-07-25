function takingData()
{
	if(localStorage.getItem('sriram')!=null)
	{
		var dataFromLS=JSON.parse(localStorage.getItem('sriram'));
		console.log(dataFromLS.length);
	}
}




function depositsForm()
{
	var balance=document.getElementById('balance').value;
	var deposit=document.getElementById('deposit').value;
	var withdraw=document.getElementById('withdraw').value;
	console.log(balance,deposit,withdraw);

	var mulusers=[];
	var users=
	{
		"balance":balance,
		"deposit":deposit,
		"withdraw":withdraw
	}

	localStorage.getItem('sriram');
	if(localStorage.getItem('sriram')!=null)
	{
		var dataFromLS=JSON.parse(localStorage.getItem('sriram'));
		console.log(dataFromLS);
		mulusers.push(users);
		for(var i=0; i<dataFromLS.length; i++)
		{
			mulusers.push(dataFromLS[i]);
		}
		localStorage.setItem("sriram",JSON.stringify(mulusers));

	}
	else
	{
		mulusers.push(users);
		localStorage.setItem("sriram",JSON.stringify(mulusers));
	}
}

