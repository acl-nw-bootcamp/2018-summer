function addStore(storeForm) {
  console.log(storeForm.storeName.value);
  console.log(storeForm.minCustomers.value);
  console.log(storeForm.maxCustomers.value);
  console.log(storeForm.avgSale.value);

  var range = storeForm.maxCustomers.value - storeForm.minCustomers.value;
  console.log(range);

  var random = Math.random() * range;
  console.log(random);

  var customers = random + parseInt(storeForm.minCustomers.value);
  console.log(customers);
}
