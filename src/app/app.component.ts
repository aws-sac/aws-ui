import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'aws-ui';
  data = {
    query1: null,
    query3: null
  };

  constructor(private http: HttpClient) {
    this.query1();
    this.query3();
  }

  query1(): any {
    let apiURL = `https://fuseki-aws.herokuapp.com/meds/query?query=PREFIX+pm%3A%3Chttps%3A%2F%2Ffuseki-aws.herokuapp.com%2FPreturiMedicamente.owl%23%3E%0D%0A++SELECT+%3Fentity++%3Fresult%0D%0A++WHERE+%7B%0D%0A++++++%3Fentity+pm%3ACodCIM+%3Fresult+.%0D%0A++++++FILTER%28%3Fresult+%3D+%22W43451003%22%29%0D%0A++%7D%0D%0A++ORDER+BY+%3Fresult+DESC%28pm%3APretAm%29&output=json&stylesheet=%2Fxml-to-html.xsl`;

    return this.http.get(apiURL)
      .subscribe(data => {
        this.data.query1 = data;
      });
  }

  query3(): any {
    let apiURL = `https://fuseki-aws.herokuapp.com/meds/query?query=PREFIX+pm%3A%3Chttps%3A%2F%2Ffuseki-aws.herokuapp.com%2FPreturiMedicamente.owl%23%3E%0D%0ASELECT+%3Fentity++%3Fresult%0D%0AWHERE+%7B%0D%0A++++%3Fentity+pm%3AFirma+%3Fresult+.+%0D%0A++++FILTER%28%3Fresult+%3D+%22OTSUKA+PHARMACEUTICAL+EUROPE+LTD+-+MAREA+BRITANIE%22%29%0D%0A%7D&output=json&stylesheet=%2Fxml-to-html.xsl`;

    return this.http.get(apiURL)
      .subscribe(data => {
        this.data.query3 = data;
      });
  }
}
