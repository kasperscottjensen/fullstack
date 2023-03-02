class ApiCaller {
    
    constructor(){

    }

    async fetchData () {
        fetch('api/data')
        .then(response => response.json())
        .then(result => {
            
            const dataTable = document.getElementById('data-table');
            
            result.forEach(element => {

                const row = document.createElement('tr');
                dataTable.append(row);

                const tdId = document.createElement('td')
                tdId.innerText = element.id;
                row.append(tdId);

                const tdName = document.createElement('td')
                tdName.innerText = element.name;
                row.append(tdName);

                const tdAge = document.createElement('td')
                tdAge.innerText = element.age;
                row.append(tdAge);

                const tdOther = document.createElement('td')
                row.innerText = element.other;
                row.append(tdOther);

            })
        })

    }

}

const apiCaller = new ApiCaller();