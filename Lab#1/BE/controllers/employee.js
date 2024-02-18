const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const ID=req.params.id;
  console.log(ID);
  const index=employee.findIndex(empl=>empl.id===ID);
  console.log(index);
  const deleted=employee.splice(index,1);
  console.log(employee);
  res.status(200).json({message:'employee deleted'});
  

};

// TODO
exports.createEmployee = async (req, res, next) => {
  console.log(req);
  const Name= req.body.Name;
  const ID=req.body.ID;
  const employeee={id:ID,name:Name};
  
  const found=employee.find(empl=>empl.id===ID);
  if(found)
  {
    console.log('failed');
    res.status(404).json({message:'ID already exists'});
  }
  else{
   employee.push(employeee);
   console.log('sucess',employee);
    res.status(200).json({message:'Employee added'});
  }


};
