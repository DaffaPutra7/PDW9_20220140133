function submitForm() {
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;
    const warranty = document.getElementById('warranty').checked;

    const warrantyText = warranty ? 'Tambah Garansi' : 'Tidak Ditambah Garansi';

    alert(`Nama Pembeli: ${productName}\nEquipment: ${category}\nJumlah Equipment: ${quantity}\nGaransi: ${warrantyText}`);
}