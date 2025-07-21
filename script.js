function updateValue(id) {
  const slider = document.getElementById("m" + id);
  const valueDisplay = document.getElementById("v" + id);
  valueDisplay.textContent = slider.value;
}

function resetSliders() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("m" + i).value = 90;
    updateValue(i);
  }
}

function saveData() {
  let data = new FormData();
  for (let i = 1; i <= 6; i++) {
    data.append("m" + i, document.getElementById("m" + i).value);
  }

  fetch("update_motor_data.php", {
    method: "POST",
    body: data
  }).then(() => {
    loadTable();
  });
}

function runPose() {
  fetch("run_pose.php")
    .then(res => res.text())
    .then(data => {
      document.getElementById("output").innerText = data;
    });
}

function deleteRow(id) {
  let data = new FormData();
  data.append("id", id);

  fetch("delete_motor_data.php", {
    method: "POST",
    body: data
  }).then(() => {
    loadTable();
  });
}

function loadRow(m1, m2, m3, m4, m5, m6) {
  document.getElementById("m1").value = m1;
  document.getElementById("m2").value = m2;
  document.getElementById("m3").value = m3;
  document.getElementById("m4").value = m4;
  document.getElementById("m5").value = m5;
  document.getElementById("m6").value = m6;
  for (let i = 1; i <= 6; i++) updateValue(i);
}

function loadTable() {
  fetch("get_motor_data.php")
    .then(res => res.json())
    .then(data => {
      let body = "";
      data.forEach(row => {
        body += `<tr>
          <td>${row.id}</td>
          <td>${row.motor1}</td>
          <td>${row.motor2}</td>
          <td>${row.motor3}</td>
          <td>${row.motor4}</td>
          <td>${row.motor5}</td>
          <td>${row.motor6}</td>
          <td>
            <button onclick="loadRow(${row.motor1}, ${row.motor2}, ${row.motor3}, ${row.motor4}, ${row.motor5}, ${row.motor6})">Load</button>
            <button onclick="deleteRow(${row.id})">Delete</button>
          </td>
        </tr>`;
      });
      document.getElementById("tableBody").innerHTML = body;
    });
}

loadTable();