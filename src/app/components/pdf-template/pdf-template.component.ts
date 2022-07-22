import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class recepcionData {
  persona: string = 'Juan Carlos Garcia';
  vehiculo: string = 'Mazda 323:';
  placa: string = 'JK-4562';
  vin: string = 'JK0001';
  fechaIngreso: string = '14-07-22';
  fechaEntrega: string = '24-07-22 ';
  manifiesta: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac metus at justo maximus sollicitudin interdum sed lectus. Fusce pharetra dolor id enim tristique ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per sed.';
}

class imagesStorage{
  logo: string =  `data:image/png;base64,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`;
  llanta: string = '';
  extintor: string = '';
  gato: string = '';
  kitTools: string = '';
  phone: string = '';
  velocimetro: string = '';
}

interface Employee {
  id: number;
  name: string;
}

const arr: Employee[] = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jeff' },
];

export interface checkElement {
  id: number;
  name: string;
}
export interface repuestos {
  id: number;
  descripcion: string;
  cantidad: number;
  precio: number;
  subtotal: number;
  iva: number;
  total: number;
}
export interface totalesCliente {
  id: number;
  tiempo: Date;
  manoObra: number;
  repuestos: number;
  subtotal: number;
  iva: number;
  total: number;
}
export interface sumaTotales {
  subtotal: number;
  iva: number;
  total: number;
}
export interface operaciones {
  id: number;
  descripcion: string;
  cantidad: number;
  tiempo: string;
  hora: string;
  subtotal: number;
  iva: number;
  total: number;
}

const listaChequeo: checkElement[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
];
const listaRepuestos: repuestos[] = [
  {id: 1, descripcion: 'ACEITE MOTOR GASOLINA BLEND POWER 10W30 API SN TQ', cantidad: 4, precio: 58000, subtotal: 232000, iva: 23200, total: 255200,},
  {id: 2, descripcion: 'FILTRO ACEITES 11/Q22/C37-1.4-/V29/K07II', cantidad: 3, precio: 8000, subtotal: 24000, iva: 2400, total: 26400,},
  {id: 3, descripcion: 'GASOLINA BLEND POWER 10W30 API SN TQ', cantidad: 5, precio: 5000, subtotal: 25000, iva: 2500, total: 27500,},
  {id: 4, descripcion: 'MOTOR GASOLINA BLEND POWER 10W30 API SN TQ', cantidad: 2, precio: 50000, subtotal: 100000, iva: 10000, total: 110000,},

];
const listaTotalesCliente: totalesCliente[] = [
  {id: 1, tiempo: new Date(), manoObra: 4550, repuestos: 4, subtotal: 232000, iva: 23200, total: 255200,},
  {id: 2, tiempo: new Date(), manoObra: 4800, repuestos: 3, subtotal: 25000, iva: 2500, total: 27500,},
  {id: 4, tiempo: new Date(), manoObra: 55000, repuestos: 2, subtotal: 100000, iva: 10000, total: 110000,},

];
const listatotales: sumaTotales[] = [
  {subtotal: 632000, iva: 63200, total: 655200,},

];
const listaOperaciones: operaciones[] = [
  {id: 1, descripcion: 'ACEITE MOTOR GASOLINA BLEND POWER 10W30 API SN TQ', cantidad: 4, tiempo: '2horas', hora: '3:20PM', subtotal: 232000, iva: 23200, total: 255200,},
  {id: 2, descripcion: 'FILTRO ACEITES 11/Q22/C37-1.4-/V29/K07II', cantidad: 3, tiempo: '2horas', hora: '3:20PM', subtotal: 24000, iva: 2400, total: 26400,},
  {id: 3, descripcion: 'GASOLINA BLEND POWER 10W30 API SN TQ', cantidad: 5, tiempo: '2horas', hora: '3:20PM', subtotal: 25000, iva: 2500, total: 27500,},
  {id: 4, descripcion: 'MOTOR GASOLINA BLEND POWER 10W30 API SN TQ', cantidad: 2, tiempo: '2horas', hora: '3:20PM', subtotal: 100000, iva: 10000, total: 110000,},

];

var stuff = [
  1,
  'bbbbbbbbbbbbbbbbbbb',
  'ccccccccccccccccccc',
  'ddddddddddddddddddd'
];


@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.scss']
})
export class PdfTemplateComponent implements OnInit {

  public sr: string = 'SEÑOR(A)';
  public mainTitle: string = 'ORDEN DE SERVICIO';
  shared = new recepcionData();
  image = new imagesStorage();
  public customerName = 'Juan';

  constructor() {

   }

  ngOnInit(): void {

  }
public setRow(){
    let rows = [];
    // rows.push( [
    //   { text: 'DESCRIPCIÓN',   style: 'labelsTable', alignment: 'center' },
    //   { text: 'CANTIDAD',   style: 'labelsTable', alignment: 'center' },
    //   { text: 'TIEMPO',   style: 'labelsTable', alignment: 'center' },
    //   { text: 'HORA',   style: 'labelsTable', alignment: 'center' },
    //   { text: 'SUBTOTAL',   style: 'labelsTable', alignment: 'center' },
    //   { text: 'IVA',   style: 'labelsTable', alignment: 'center'},
    //   { text: 'TOTAL',   style: 'labelsTable', alignment: 'center'},
    // ],);
    // console.log('i', listaOperaciones.length);
    for(let i = 0 ; i < listaOperaciones.length; i++) {
      console.log('hola',i);
      console.log('hora', new Date());
        rows.push({text: listaOperaciones[i].descripcion, style: 'labelsTable', alignment: 'center'}, {text: listaOperaciones[i].cantidad, style: 'labelsTable', alignment: 'center'}, {text: listaOperaciones[i].tiempo, style: 'labelsTable', alignment: 'center'}, {text: listaOperaciones[i].hora, style: 'labelsTable', alignment: 'center'}, {text: listaOperaciones[i].subtotal, style: 'labelsTable', alignment: 'center'}, {text: listaOperaciones[i].iva, style: 'labelsTable', alignment: 'center'}, {text: listaOperaciones[i].total, style: 'labelsTable', alignment: 'center'});
        }
        return rows;
  }

//   public setRow(){
//     let rows = [];
//     rows.push(['Descripcion.', 'Cantidad', 'Tiempo', 'Hora', 'Subtotal', 'Iva', 'Total']);
//     console.log('i', listaOperaciones.length);
//     for(let i = 0 ; i < listaOperaciones.length; i++) {
//       console.log('hola',i);
//       console.log('hora', new Date());
//         rows.push([listaOperaciones[i].descripcion, listaOperaciones[i].cantidad, listaOperaciones[i].tiempo, listaOperaciones[i].hora, listaOperaciones[i].subtotal, listaOperaciones[i].iva, listaOperaciones[i].total]);
// }
// return rows;
//   }

 public formatDate(){
  return new Date().toDateString();
 }

  generatePDF(action = 'open') {
    let docDefinition = {
      // pageSize: 'a4',
      // pageSize: {
      //   width: 595.28,
      //   height: 'auto'
      // },
      pageMargins: [40, 130, 40, 60],
      header: [
        {
          style: 'tableExample',
          layout: 'noBorders',
          table: {
            widths: [190, '*'],
            headerRows: 1,
            body: [
              // ['Column 1', 'Column 2', 'Column 3'],
              [
                {
                  image: this.image.logo,
                  width: 180,
                  margin: [40, 0],
                },
                {
                  ul: [
                    {
                      columns: [
                        { width: 'auto', text: 'SEÑOR(A):'},
                        { width: '*', text: this.shared.persona},
                      ],
                      columnGap: 5,
                      listType: 'none'
                    },
                    {
                      columns: [
                        { width: 'auto', text: 'VEHÍCULO:'},
                        { width: '*', text: this.shared.vehiculo},
                      ],
                      columnGap: 5,
                      listType: 'none'
                    },
                    {
                      columns: [
                        { width: 'auto', text: 'PLACA:'},
                        { width: '*', text: this.shared.placa},
                      ],
                      columnGap: 5,
                      listType: 'none'
                    },
                    {
                      columns: [
                        { width: 'auto', text: 'VIN:'},
                        { width: '*', text: this.shared.vin},
                      ],
                      columnGap: 5,
                      listType: 'none'
                    },
                    {
                      columns: [
                        { width: 'auto', text: 'FECHA DE INGRESO:'},
                        { width: '*', text: this.shared.fechaIngreso},
                      ],
                      columnGap: 5,
                      listType: 'none'
                    },
                    {
                      columns: [
                        { width: 'auto', text: 'FECHA DE ENTREGA:'},
                        { width: '*', text: this.shared.fechaEntrega},
                      ],
                      columnGap: 5,
                      listType: 'none'
                    },


                  ],
                  margin: [60, 0],
                  style: 'listaHead',
                },


              // {
                  //   ul: [
                  //     {
                  //       style: 'tableExample',
                  //       color: '#444',
                  //       margin: [0, 0, 0, 5],
                  //       // layout: 'noBorders',
                  //       table: {
                  //         widths: ['*'],
                  //         heights: [60],
                  //         headerRows: 1,

                  //         // keepWithHeaderRows: 1,
                  //         body: [

                  //           [{ text: '', alignment: 'center',  fillColor: '#E9E9E9',}],
                  //         ],
                  //       },
                  //     },
                  //     {
                  //       text: 'ORDEN DE SERVICIO: aaaaaaaaaa',
                  //       listType: 'none',
                  //       style: 'labelsHeaderAlt'
                  //     },
                  //     { text: 'ASESOR:', alignment: 'right', listType: 'none', style: 'labelsHeaderAlt'},
                  //     {
                  //       text: 'Teléfono de contacto:',
                  //       listType: 'none',
                  //       style: 'labelsHeaderAlt'
                  //     },
                  //     {
                  //       text: 'Verificación de certificación:',
                  //       listType: 'none',
                  //       style: 'labelsHeaderAlt'
                  //     },
                  //   ],
                  //   margin: [0, 0, 40, 0],
                  //   style: 'listaHead',
             // },
              ],
            ],
          },
          margin: [0, 20, 0 ,5],
        },
      ],
      content:[
      // {        table: {
      //           widths: ['auto', 100, 150, 'auto', 'auto', 'auto', 'auto'],
      //           body: this.setRow()
      //       }
      // },
        // :::::::::::::::::::::::::::::::::::::::::::: Cliente Manifiesta ::::::::::::::::::::::::::::::::::::::::::::
          {
            style: 'tableExample',
            color: '#444',
            // layout: 'noBorders',
            table: {
              widths: ['*'],
              heights: ['auto', 35],
              headerRows: 1,
              // keepWithHeaderRows: 1,
              body: [
                [
                  {
                    text: 'CLIENTE MANIFIESTA',
                    style: 'tablesHead',
                    alignment: 'center',
                  },
                ],
                [{ text: this.shared.manifiesta, alignment: 'justify' }],
              ],
              margin: [0, 5],
            },
            margin: [0, 0, 0 , 20],
        },
           // :::::::::::::::::::::::::::::::::::::::::::: Fin Cliente Manifiesta ::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

           // :::::::::::::::::::::::::::::::::::::::::::: SOLICITUDES DEL CLIENTE ::::::::::::::::::::::::::::::::::::::::::::
          {
            style: 'tableExample',
            color: '#444',
            // layout: 'noBorders',
            table: {
              widths: ['*'],
              heights: ['auto', '*'],
              headerRows: 1,
              // keepWithHeaderRows: 1,
              body: [
                [
                  {
                    text: 'SOLICITUDES DEL CLIENTE',
                    style: 'tablesHead',
                    alignment: 'center',
                  },
                ],
                [
                  {
                    text: 'LISTA DE CREQUEO',
                    style: 'subtitleTable',
                    border: [true, true, true, false],
                  },
                ],
                [        {
                  ul:[

                    listaChequeo.map(function(item) {
                        return ({ text: item.name});
                        }),

                  ],
                  margin: [0, 5],
                  style: 'listaContent',
                  border: [true, false, true, true],
                },],
              ],
            },
        },
            // :::::::::::::::::::::::::::::::::::::::::::: FIN SOLICITUDES DEL CLIENTE ::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::: REPUESTOS ::::::::::::::::::::::::::::::::::::::::::::::::::::::
        {
              style: 'tableExample',
              color: '#444',
              // layout: 'noBorders',
              table: {
                widths: ['*', 'auto', 'auto', 'auto', 'auto', 'auto'],
                //  heights: ['auto', 1, 'auto', '*', 'auto', '*', 'auto', '*'],
                headerRows: 2,

                // keepWithHeaderRows: 1,
                body: [
                  [
                    {
                      text: 'REPUESTOS',
                      style: 'tablesHead',
                      colSpan: 6,
                      alignment: 'center',

                    },
                    {},
                    {},
                    {},
                    {},
                    {},

                  ],
                  [
                    {
                      text: '',
                      colSpan: 6,
                      alignment: 'center',
                      border: [false, false, false, false],
                      height: 1

                    },
                    {},
                    {},
                    {},
                    {},
                    {},

                  ],
                  [
                    { text: 'DESCRIPCIÓN',   style: 'labelsTable', alignment: 'center' },
                    { text: 'CANTIDAD',   style: 'labelsTable', alignment: 'center' },
                    { text: 'PRECIO',   style: 'labelsTable', alignment: 'center' },
                    { text: 'SUBTOTAL',   style: 'labelsTable', alignment: 'center' },
                    { text: 'IVA',   style: 'labelsTable', alignment: 'center'},
                    { text: 'TOTAL',   style: 'labelsTable', alignment: 'center'},
                  ],
                  ...listaRepuestos.map(r => ([{text: r.descripcion, style: 'labelsTable', alignment: 'center'}, {text: r.cantidad, style: 'labelsTable', alignment: 'center'}, {text: r.precio, style: 'labelsTable', alignment: 'center'}, {text: r.subtotal, style: 'labelsTable', alignment: 'center'}, {text: r.iva, style: 'labelsTable', alignment: 'center'}, {text: r.total, style: 'labelsTable', alignment: 'center'}])),
                  [
                    { text: '1',   style: 'labelsTable', alignment: 'center' },
                    { text: '2',   style: 'labelsTable', alignment: 'center' },
                    { text: '$ 5.300',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                    {},
                  ],
                  [
                    { text: '2',   style: 'labelsTable', alignment: 'center' },
                    { text: '5',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '$ 5.300',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },

                  ],
                  [
                    {
                      text: 'TOTALES:',
                      style: 'labelsTable',
                      colSpan: 3,
                      alignment: 'left',
                    },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                    {},
                  ],

                ],
              },
              margin: [0, 15],
            },
           // :::::::::::::::::::::::::::::::::::::::::::: FIN REPUESTOS ::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::: OPERACIONES ::::::::::::::::::::::::::::::::::::::::::::::::::::::
        {
              style: 'tableExample',
              color: '#444',
              // layout: 'noBorders',
              table: {
                widths: ['*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                //  heights: ['auto', 1, 'auto', '*', 'auto', '*', 'auto', '*'],
                headerRows: 3,

                // keepWithHeaderRows: 1,
                body: [
                  [
                    {
                      text: 'OPERACIONES',
                      style: 'tablesHead',
                      colSpan: 7,
                      alignment: 'center',

                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},

                  ],
                  [
                    {
                      text: '',
                      colSpan: 7,
                      alignment: 'center',
                      border: [false, false, false, false],
                      height: 1
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                  ],
                  // [this.setRow()],
                  [
                    { text: 'DESCRIPCIÓN',   style: 'labelsTable', alignment: 'center' },
                    { text: 'CANTIDAD',   style: 'labelsTable', alignment: 'center' },
                    { text: 'TIEMPO',   style: 'labelsTable', alignment: 'center' },
                    { text: 'HORA',   style: 'labelsTable', alignment: 'center' },
                    { text: 'SUBTOTAL',   style: 'labelsTable', alignment: 'center' },
                    { text: 'IVA',   style: 'labelsTable', alignment: 'center'},
                    { text: 'TOTAL',   style: 'labelsTable', alignment: 'center'},
                  ],
                  ...listaOperaciones.map(o => ([{text: o.descripcion, style: 'labelsTable', alignment: 'center'}, {text: o.cantidad, style: 'labelsTable', alignment: 'center'}, {text: o.tiempo, style: 'labelsTable', alignment: 'center'}, {text: o.hora, style: 'labelsTable', alignment: 'center'}, {text: o.subtotal, style: 'labelsTable', alignment: 'center'}, {text: o.iva, style: 'labelsTable', alignment: 'center'}, {text: o.total, style: 'labelsTable', alignment: 'center'}])),
                  // [
                  //   { text: '1',   style: 'labelsTable', alignment: 'center' },
                  //   { text: '',   style: 'labelsTable', alignment: 'center' },
                  //   { text: '',   style: 'labelsTable', alignment: 'center' },
                  //   { text: '',   style: 'labelsTable', alignment: 'center' },
                  //   { text: '',   style: 'labelsTable', alignment: 'center' },
                  //   {},
                  //   {},
                  // ],
                  [
                    {
                      text: 'TOTALES:',
                      style: 'labelsTable',
                      colSpan: 4,
                      alignment: 'left',
                    },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                    {},
                    {},
                  ],

                ],
              },
              margin: [0, 15],
            },
           // :::::::::::::::::::::::::::::::::::::::::::: FIN OPERACIONES ::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::: TOTALES POR CLIENTE ::::::::::::::::::::::::::::::::::::::::::::::::::::::
           {
            style: 'tableExample',
            color: '#444',
            // layout: 'noBorders',
            table: {
              widths: ['*', '*', '*', '*', '*', '*'],
              //  heights: ['auto', 1, 'auto', '*', 'auto', '*', 'auto', '*'],
              headerRows: 3,

              // keepWithHeaderRows: 1,
              body: [
                [
                  {
                    text: 'TOTALES POR CLIENTE',
                    style: 'tablesHead',
                    colSpan: 6,
                    alignment: 'center',
                    height: 1

                  },
                  {},
                  {},
                  {},
                  {},
                  {},

                ],
                [
                  {
                    text: '',
                    colSpan: 5,
                    alignment: 'center',
                    border: [false, false, false, false],
                    height: 1
                  },
                  {},
                  {},
                  {},
                  {},
                  {},
                ],
                [

                  { text: 'TIEMPO',   style: 'labelsTable', alignment: 'center' },
                  { text: 'CANTIDAD',   style: 'labelsTable', alignment: 'center' },
                  { text: 'PRECIO',   style: 'labelsTable', alignment: 'center' },
                  { text: 'SUBTOTAL',   style: 'labelsTable', alignment: 'center' },
                  { text: 'IVA',   style: 'labelsTable', alignment: 'center'},
                  { text: 'TOTAL',   style: 'labelsTable', alignment: 'center'},
                ],
                ...listaTotalesCliente.map(tc => ([{text: tc.tiempo, style: 'labelsTable', alignment: 'center'}, {text: tc.manoObra, style: 'labelsTable', alignment: 'center'}, {text: tc.repuestos, style: 'labelsTable', alignment: 'center'}, {text: tc.subtotal, style: 'labelsTable', alignment: 'center'}, {text: tc.iva, style: 'labelsTable', alignment: 'center'}, {text: tc.total, style: 'labelsTable', alignment: 'center'}])),
                [
                  { text: '1',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  {},
                  {},
                ],
                [
                  { text: '2',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },

                ],
                [
                  {
                    text: 'TOTALES:',
                    style: 'labelsTable',
                    colSpan: 3,
                    alignment: 'left',
                  },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  { text: '',   style: 'labelsTable', alignment: 'center' },
                  {},
                  {},
                ],

              ],
            },
            margin: [0, 20],
          },

         // :::::::::::::::::::::::::::::::::::::::::::: FIN TOTALES POR CLIENTE ::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::: INVENTARIO ::::::::::::::::::::::::::::::::::::::::::::::::::::::
          {
            style: 'tableExample',
            color: '#444',
            // layout: 'noBorders',
            table: {
              widths: ['*'],
              heights: ['auto', '*'],
              headerRows: 1,
              // keepWithHeaderRows: 1,
              body: [
                [
                  {
                    text: 'INVENTARIO',
                    style: 'tablesHead',
                    alignment: 'center',
                  },
                ],
                [{ text: 'KILOMETRAJE', style: 'subtitleTable', border: [true, true, true, false]}],
                [{ text: this.shared.manifiesta, alignment: 'justify', border: [true, false, true, false]}],
                [{ text: 'INVENTARIO', style: 'subtitleTable', border: [true, false, true, false]}],
                [        {
                  ul:[

                      stuff.map(function(item) {
                        return { text: item}
                        }),

                  ],
                  margin: [0, 5],
                  style: 'listaHead',
                  border: [true, false, true, false],
                },
              ],
              [{ text: 'AIRE ACONDICIONADO', style: 'subtitleTable', border: [true, false, true, false]}],
              [{ text: this.shared.manifiesta, alignment: 'justify', border: [true, false, true, false]}],
              [{ text: 'MANDOS INTERNOS', style: 'subtitleTable', border: [true, false, true, false]}],
              [{ text: this.shared.manifiesta, alignment: 'justify', border: [true, false, true, false]}],
              [{ text: 'LUCES', style: 'subtitleTable', border: [true, false, true, false]}],
              [{ text: this.shared.manifiesta, alignment: 'justify', border: [true, false, true, false]}],
              [{ text: 'OBJETOS ENCONTRADOS', style: 'subtitleTable', border: [true, false, true, false]}],
              [{ text: this.shared.manifiesta, alignment: 'justify', border: [true, false, true, false]}],
              [{ text: 'BAJO EL CAPÓ', style: 'subtitleTable', border: [true, false, true, false]}],
              [{ text: this.shared.manifiesta, alignment: 'justify', border: [true, false, true, false]}],

              [        {
                ul:[

                    stuff.map(function(item) {
                      return { text: item}
                      }),

                ],
                margin: [0, 5],
                style: 'listaHead',
              },
            ],
              ],
            },
            margin: [0, 20],
        },
         // :::::::::::::::::::::::::::::::::::::::::::: FIN INVENTARIO ::::::::::::::::::::::::::::::::::::::::::::

           // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

           // :::::::::::::::::::::::::::::::::::::::::::: REGISTRO FOTOGRÁFICO ::::::::::::::::::::::::::::::::::::::::::::
        {
          margin: [0, 20],
          style: 'tableExample',
          color: '#444',
          // layout: 'noBorders',
          table: {
            widths: ['*', '*', '*'],
            heights: ['auto',120, 'auto', 'auto', 120, 'auto', 'auto'],
            headerRows: 1,

            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'REGISTRO FOTOGRÁFICO',
                  style: 'tablesHead',
                  colSpan: 3,
                  alignment: 'center',
                },
                {},
                {},
              ],
              [
                {
                  text: ' ',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]

                },
                {
                  text: ' ',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [false, false, false, false]
                },
                {
                  text: ' ',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]
                },

              ],
              [
                {
                  text: 'Observaciones',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false],
                  margin: [0, 5, 0, 5],
                },
                {
                  text: 'Observaciones',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [false, false, false, false],
                  margin: [0, 5, 0, 5],
                },
                {
                  text: 'Observaciones',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false],
                  margin: [0, 5, 0, 5],
                },
              ],
              [
                {
                  text: '___________________',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]
                },
                {
                  text: '___________________',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [false, false, false, false]
                },
                {
                  text: '___________________',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]
                },
              ],
              [
                {
                  text: ' ',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]

                },
                {
                  text: ' ',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [false, false, false, false]
                },
                {
                  text: ' ',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]
                },

              ],
              [
                {
                  text: 'Observaciones',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]
                },
                {
                  text: 'Observaciones',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [false, false, false, false]
                },
                {
                  text: 'Observaciones',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, false]
                },
              ],
              [
                {
                  text: '___________________',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, true],
                  margin: [0, 5, 0, 5],
                },
                {
                  text: '___________________',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [false, false, false, true],
                  margin: [0, 5, 0, 5],
                },
                {
                  text: '___________________',
                  style: 'tableHeader',
                  alignment: 'center',
                  border: [true, false, true, true],
                  margin: [0, 5, 0, 5],
                },
              ],
            ],
          },

        },
        {
          style: 'tableExample',
          color: '#444',
          // layout: 'noBorders',
          table: {
            widths: ['*'],
            heights: ['auto', 'auto', 35],
            headerRows: 1,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'FIRMA DEL CLIENTE',
                  style: 'tablesHead',
                  alignment: 'center',
                },
              ],
              [
                {
                  text: 'INSERTAR FIRMA',
                  style: 'subtitleTable',
                  border: [true, true, true, false],
                },
              ],
              [{ text: this.shared.manifiesta, alignment: 'justify',  border: [true, false, true, true]}],
            ],
            margin: [0, 5],
          },
          margin: [0, 0, 0 , 20],
      },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
        listaHead: {
          fontSize: 10,
        },
        listaContent: {
          fontSize: 10,
          listType: 'none'
        },
        tablesHead: {
          alignment: 'center',
          fillColor: '#6C8695',
          fontSize: 12,
          color: '#ffffff',
          bold: true,
        },
        subtitleTable: {
          alignment: 'left',
          fontSize: 10,
          bold: true,
          margin: [10, 5, 0, 5],
        },
        labelsTable: {
          bold: true,
          fontSize: 9,
          margin: [0, 5, 0, 3],
        },
        labelsHeaderAlt: {
          fontSize: 8,
          alignment: 'right',
          listType: 'none',
        },
        // tableExample: {
        //   margin: [0, 5, 0, 15],
        //   fillColor: "#2D4D81",
        //   color: "#ffffff"
        // },
      },
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

}
