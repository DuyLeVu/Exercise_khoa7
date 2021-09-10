function doitien(){
        let m = document.getElementById('money').value;
        let x = document.getElementById('fromcurrency').value;
        let y = document.getElementById('tocurrency').value;
        m = parseFloat(m);
        x = parseFloat(x);
        y = parseFloat(y);
        tong = m * y / x;
        // document.write('Tong: '+ tong);
        document.getElementById('output').innerHTML = tong;
        document.getElementById('txtvalue').innerText = document.getElementById('tocurrency').innerText;
}