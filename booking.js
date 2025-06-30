
fetch('data/zones.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('booking-app');
    container.innerHTML = '<h1>選擇營區</h1>';
    data.zones.forEach(zone => {
      const card = document.createElement('div');
      card.innerHTML = `<h2>${zone.name}</h2>
                        <p>型態：${zone.type}</p>
                        <p>尺寸：${zone.size}</p>
                        <p>帳數：${zone.count}</p>
                        <p>平日：$${zone.price.weekday}</p>
                        <p>假日：$${zone.price.holiday}</p>
                        <p>連假：$${zone.price.special}</p>
                        <p>${zone.available ? '<strong>可預約</strong>' : '已額滿'}</p>`;
      card.style.border = '1px solid #ccc';
      card.style.margin = '1rem 0';
      card.style.padding = '1rem';
      container.appendChild(card);
    });
  });
