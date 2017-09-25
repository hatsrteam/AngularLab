
import { InMemoryDbService } from 'angular-in-memory-web-api'
import {Customer} from "../Model/Customer"

export class CustomerApiService implements InMemoryDbService {
  createDb() {
    let customers =[
    { id:0, CustomerCode: '1001', CustomerName: 'Shiv' , CustomerAmount :100.23
    },
    { CustomerCode: '1002', CustomerName: 'Shiv1' , CustomerAmount :1.23
    },
    { CustomerCode: '1003', CustomerName: 'Shiv2' , CustomerAmount :10.23
    },
    { CustomerCode: '1004', CustomerName: 'Shiv3' , CustomerAmount:700.23 }
    ]
    return {customers};
  }
}