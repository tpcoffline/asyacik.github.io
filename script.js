function checkDate() {
    const enteredDate = document.getElementById('birthdate').value;
    if (enteredDate === '2007-02-09') {
        document.getElementById('entry-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('trumpet-sound').play();
        setTimeout(() => {
            document.getElementById('letter').style.display = 'block';
        }, 2000);
    } else {
        alert('Yanlış tarih! Tekrar deneyin.');
    }
}
