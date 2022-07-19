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

var stuff = [
  'aaaaaaaaaaaaaaaaaaa',
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

  constructor() { }

  ngOnInit(): void {
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
          margin: [0, 15],
        },
      ],
      content:[
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
            margin: [0, 10],
        },
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
                [        {
                  ul:[
                    
                      stuff.map(function(item) {
                        return { text: item}
                        }),
                    
                  ],
                  margin: [0, 5],
                  style: 'listaHead',
                },],
              ],
            },
        },
        {
              style: 'tableExample',
              color: '#444',
              // layout: 'noBorders',
              table: {
                widths: [20, '*', 60, 50, 60],
                 heights: ['auto', 50, 50, 72, 'auto', '*', 'auto', '*', 'auto', '*'],
                headerRows: 2,
    
                // keepWithHeaderRows: 1,
                body: [
                  [
                    {
                      text: 'SOLICITUDES DEL CLIENTE',
                      style: 'tablesHead',
                      colSpan: 5,
                      alignment: 'center',
                    },
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    { text: 'Item',   style: 'labelsTable', alignment: 'center' },
                    { text: 'Descripción',   style: 'labelsTable', alignment: 'center' },
                    { text: 'Cargo cliente',   style: 'labelsTable', alignment: 'center' },
                    { text: 'Cantidad',   style: 'labelsTable', alignment: 'center' },
                    { text: 'Valor',   style: 'labelsTable', alignment: 'center'},
                  ],
                  [
                    { text: '1',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '2',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '3',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '4',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '5',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    { text: '6',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    { text: '',   style: 'labelsTable', alignment: 'center' },
                    {},
                  ],
                  [
                    {
                      text: 'Subtotal:',
                      style: 'labelsTable',
                      colSpan: 5,
                      alignment: 'left',
                    },
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {
                      text: 'IVA:',
                      style: 'labelsTable',
                      colSpan: 5,
                      alignment: 'left',
                    },
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {
                      text: 'TOTAL:',
                      style: 'labelsTable',
                      colSpan: 5,
                      alignment: 'left',
                    },
                    {},
                    {},
                    {},
                    {},
                  ],
                ],
              },
              margin: [0, 15],
            },
      ],
      // content: [

      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: [210, '*'],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'INFORMACIÓN INGRESO',
      //             style: 'tablesHead',
      //             colSpan: 2,             
      //           },
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Fecha de ingreso: D M A |  00:00 A.M.',
      //             style: 'labelsTable',
      //             alignment: 'left',
      //           },
      //           {
      //             text: 'Fecha estimada de entrega: D M A |  00:00 A.M.',
      //             style: 'labelsTable',
      //             alignment: 'left',
      //           },
      //         ],
      //         [
      //           {
      //             text: 'Fecha de entrega: D M A |  00:00 A.M.',
      //             style: 'labelsTable',
      //             alignment: 'left',
      //             fillColor: '#FBEA57',
      //           },
      //           {
      //             text: 'Nombre aseguradora: _______________________________________________',
      //             style: 'labelsTable',
      //             alignment: 'left',
      //           },
      //         ],
      //       ],
      //     },
      //     margin: [0, 2],
      //   },

      //   {
      //     columns: [
      //       [
      //         {
      //           margin: [0, 0, 2, 0],
      //           style: 'tableExample',
      //           color: '#444',

      //           // layout: 'noBorders',
      //           table: {
      //             widths: ['*'],

      //             headerRows: 1,

      //             // keepWithHeaderRows: 1,
      //             body: [
      //               [
      //                 {
      //                   text: 'INFORMACIÓN USUARIO',
      //                   style: 'tablesHead',
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {
           
      //                       width: 'auto',
      //                       text: 'Nombres: ____________________',
      //                     },
      //                     {
              
      //                       width: '*',
      //                       text: 'Apellidos: __________________',
      //                     },
      //                   ],
             
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {
                    
      //                       width: 'auto',
      //                       text: 'Tipo y No de documento: _________________',
      //                     },
      //                     {
                  
      //                       width: '*',
      //                       text: 'Tel: ____________',
      //                     },
      //                   ],
     
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {
                     
      //                       width: 'auto',
      //                       text: 'Celular: _________________',
      //                     },
      //                     {
               
      //                       width: '*',
      //                       text: 'E-Mail: __________________________',
      //                     },
      //                   ],
             
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {
                     
      //                       width: 'auto',
      //                       text: '¿Es el propietario?: Si No',
      //                     },
      //                     {
              
      //                       width: '*',
      //                       text: '¿Espera en sala?: Si No',
      //                     },
      //                   ],
                     
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
  
      //               [
      //                 {
      //                   text: 'Dirección: __________________________________________________',
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
      //               [
      //                 {
      //                   margin: [0, 0, 0, 0],
      //                   columns: [
      //                     {
      //                       text: 'Canal de comunicación preferido:',
      //                       width: 'auto',
      //                       style: 'labelsTable',
      //                       alignment: 'left',
                    
                            
      //                     },
      //                     {
      //                       image: 'data:image/png;base64,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',
      //                       width: 15,
                         
      //                     },
      //                     {
      //                       text: ' LLamada',
      //                       width: '*',
      //                       style: 'labelsTable',
      //                       alignment: 'left',
                         
      //                     },
      //                   ],
                     
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   width: 'auto',
      //                   border: [true, false, true, true],
      //                 },
                      
      //               ],
      //             ],
      //           },
      //         },
      //       ],
      //       [
      //         {
      //           margin: [0, 0, 2, 0],
      //           style: 'tableExample',
      //           color: '#444',

      //           // layout: 'noBorders',
      //           table: {
      //             widths: ['*'],

      //             headerRows: 1,

      //             // keepWithHeaderRows: 1,
      //             body: [
      //               [
      //                 {
      //                   text: 'INFORMACIÓN DEL VEHÍCULO',
      //                   style: 'tablesHead',
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {
                    
      //                       width: 'auto',
      //                       text: 'Modelo: __________',
      //                     },
      //                     {
                    
      //                       width: '*',
      //                       text: 'Versión: ___________',
      //                     },
      //                     {
                          
      //                       width: '*',
      //                       text: 'Motor: ___________',
      //                     },
      //                   ],
                    
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {

      //                       width: 'auto',
      //                       text: 'Kilometraje: ______________',
      //                     },
      //                     {
      
      //                       width: '*',
      //                       text: 'Año-Modelo: __________________',
      //                     },
      //                   ],
                      
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
      //               [
      //                 {
      //                   columns: [
      //                     {
                          
      //                       width: 'auto',
      //                       text: 'Fecha venta: ______________',
      //                     },
      //                     {
                          
      //                       width: '*',
      //                       text: 'Garantía: _____________________',
      //                     },
      //                   ],
                      
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
         
      //               [
      //                 {
      //                   columns: [
      //                     {
                            
      //                       width: 'auto',
      //                       text: 'Campaña de servicio: ________________',
      //                     },
      //                     {
                           
      //                       width: '*',
      //                       text: 'SOAT: _____________',
      //                     },
      //                   ],
                        
      //                   columnGap: 5,
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
         
      //               [
      //                 {
      //                   text: 'Revisión Técnico Mecánica: _______________________________',
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, false],
      //                 },
      //               ],
             
      //               [
      //                 {
      //                   text: ' ',
      //                   style: 'labelsTable',
      //                   alignment: 'left',
      //                   border: [true, false, true, true],
      //                 },
      //               ],
      //             ],
      //           },
      //         },
              
      //       ],
      //     ],
      //     margin: [0, 15],
      //   },
      
      //   // ::::::::::::::::::::::::::::::::::::::. TABLAS  ::::::::::::::::::::::::::::::::::::::::::::
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*', '*', '*'],
      //       heights: ['auto', 30, 'auto'],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {text: 'CLIENTE MANIFIESTA', style: 'tablesHead', colSpan: 3, alignment: 'center'},
      //           {},
      //           {},
      //         ],
      //         [
      //           { text: ' ', style: 'labelsTable', colSpan: 3, alignment: 'justify', height: 40,},
      //           {},
      //           {},
      //         ],
      //         [
      //           { text: 'Motivo de ingreso:',   style: 'labelsTable', alignment: 'left' },
      //           { text: 'Otro Motivo',   style: 'labelsTable', alignment: 'left' },
      //           { text: 'Entrevista Profesional:',   style: 'labelsTable', alignment: 'left' },
      //         ],
      //       ],
      //     },
      //   },
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: [20, '*', 60, 50, 60],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'SOLICITUDES DEL CLIENTE',
      //             style: 'tablesHead',
      //             colSpan: 5,
      //             alignment: 'center',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           { text: 'Item',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Descripción',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Cargo cliente',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Cantidad',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Valor',   style: 'labelsTable', alignment: 'center'},
      //         ],
      //         [
      //           { text: '1',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '2',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '3',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '4',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '5',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '6',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Subtotal:',
      //             style: 'labelsTable',
      //             colSpan: 5,
      //             alignment: 'left',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'IVA:',
      //             style: 'labelsTable',
      //             colSpan: 5,
      //             alignment: 'left',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'TOTAL:',
      //             style: 'labelsTable',
      //             colSpan: 5,
      //             alignment: 'left',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //       ],
      //     },
      //     margin: [0, 15],
      //   },
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*'],
      //       heights: ['auto', 35],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'OBSERVACIONES',
      //             style: 'tablesHead',
      //             alignment: 'center',
      //           },
      //         ],
      //         [{ text: '', alignment: 'center' }],
      //       ],
      //     },
      //   },
      //   {
      //     margin: [0, 0, 0, 0],
      //     style: 'tableExample',
      //     color: '#444',

      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*'],

      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'INVENTARIO E INSPECCIÓN DEL VEHÍCULO',
      //             style: 'tablesHead',
      //           },
      //         ],
      //         [
      //           {
      //             columns: [
      //               {
     
      //                 width: 'auto',
      //                 text: 'Interior:',
      //               },
      //               {        
      //                 width: 120,
      //                 text: 'Testigos encendidos  Si  No',
      //               },
      //               {        
      //                 width: 80,
      //                 text: 'Tarjeta SD  Si  No',
      //               },
      //               {        
      //                 width: 120,
      //                 text: 'Tarjeta de Propiedad  Si  No',
      //               },
      //               {        
      //                 width: '*',
      //                 text: 'Aire Acondicionado: _________',
      //               },
      //             ],
       
      //             columnGap: 5,
      //             style: 'labelsTable',
      //             alignment: 'left',
      //             border: [true, false, true, false],
      //           },
      //         ],
      //         [
      //           {
                  
      //             columns: [
      //               {
              
      //                 width: 'auto',
      //                 text: 'Baúl:',
      //               },
      //               {
              
      //                 width: 15,
      //                 image: 'data:image/png;base64,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',
      //               },
      //               {
            
      //                 width: '*',
      //                 text: 'Llanta repuesto  Si  No',
      //               },
      //               {
            
      //                 width: 15,
      //                 image: 'data:image/png;base64,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',
      //               },
      //               {
            
      //                 width: '*',
      //                 text: 'Kit carretera  Si  No',
      //               },
      //               {
            
      //                 width: 15,
      //                 image: 'data:image/png;base64,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',
      //               },
      //               {
            
      //                 width: '*',
      //                 text: 'Extintor   Si  No',
      //               },
      //               {
            
      //                 width: 17,
      //                 image: 'data:image/png;base64,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',
      //               },
      //               {
            
      //                 width: '*',
      //                 text: 'Gato  Si  No',
      //               },
      //             ],

      //             columnGap: 5,
      //             style: 'labelsTable',
      //             alignment: 'left',
      //             margin: [0, 5, 0, 0],
      //           },
      //         ],
      //         [
      //           {
      //             columns: [
      //               {
               
      //                 width: 'auto',
      //                 text: 'Bajo capó:',
      //               },
      //               {
         
      //                 width: '*',
      //                 text: ' ',
      //               },
      //             ],
       
      //             columnGap: 5,
      //             style: 'labelsTable',
      //             alignment: 'left',
              
      //           },
      //         ],
      //         [
      //           {
      //             columns: [
      //               {
               
      //                 width: 'auto',
      //                 text: 'Mandos Internos:',
      //               },
      //               {
        
      //                 width: '*',
      //                 text: ' ',
      //               },
      //             ],
               
      //             columnGap: 5,
      //             style: 'labelsTable',
      //             alignment: 'left',
             
      //           },
      //         ],

      //         [
      //           {
      //             columns: [
      //               {
      //                 text: 'Parte Inferior del vehículo:',
      //                 style: 'labelsTable',
      //                 alignment: 'left',
      //               },
      //               {
            
      //                 width: '*',
      //                 text: ' ',
      //               },
      //             ],
               
      //             columnGap: 5,
      //             style: 'labelsTable',
      //             alignment: 'left',
      //             margin: [0, 0, 0, 0],
          
      //           },
                
      //         ],
      //         [
      //           {
      //             columns: [
      //               {
      //                 text: 'Objetos Encontrados:',
      //                 style: 'labelsTable',
      //                 alignment: 'left',
      //               },
      //               {
            
      //                 width: '*',
      //                 text: ' ',
      //               },
      //            ],
      //            columnGap: 5,
      //            style: 'labelsTable',
      //            alignment: 'left',
      //            margin: [0, 0, 0, 0],
              
      //          }
      //         ],
      //         [
      //           {
      //             columns: [
      //           {
      //             text: 'Llantas:',
      //             style: 'labelsTable',
      //             alignment: 'left',
      //           },
      //           {
        
      //             width: '*',
      //             text: ' ',
      //           },
      //         ],
      //         columnGap: 5,
      //         style: 'labelsTable',
      //         alignment: 'left',
      //         margin: [0, 0, 0, 0],
      //       }
      //         ],
      //         [
      //           {
      //             columns: [
      //           {
      //             text: 'Accesorios:',
      //             style: 'labelsTable',
      //             alignment: 'left',
    
      //           },
      //           {
        
      //             width: '*',
      //             text: ' ',
      //           }
      //         ],
      //         columnGap: 5,
      //         style: 'labelsTable',
      //         alignment: 'left',
      //         margin: [0, 0, 0, 0],
      //         border: [true, true, true, false]
      //       }
      //         ],
          
      //       ],
      //     },
      //   },
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*', '*'],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [

      //           {
      //             columns: [
      //               {
      //                 text: 'Nivel de Combustible:',
      //                 style: 'labelsTable',
      //                 alignment: 'left',
      //               },
      //               {
      //                 image: 'data:image/png;base64,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',
      //                 width: 90,
      //                 alignment: 'center'
      //               },
      //         ],
      //         columnGap: 5,
      //         style: 'labelsTable',
      //         alignment: 'left',
      //         margin: [0, 0, 0, 0],
              
      //       },
      //           {
      //             text: 'Observaciones/ Hallazgos:: ',
      //             style: 'labelsTable',
      //             alignment: 'left',
      //           },
      //         ],
      //       ],
      //     },
      //     margin: [0, 0, 0, 15],
      //   },
        
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: [150, 150, '*'],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'AUTORIZACIONES ADICIONALES',
      //             style: 'tablesHead',
      //             colSpan: 3,
      //             alignment: 'center',
      //           },
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Forma de pago:',
      //             style: 'labelsTable',
      //             colSpan: 1,
      //             alignment: 'left',
               
      //           },
      //           {
      //             text: 'Factura a nombre de:',
      //             style: 'labelsTable',
      //             colSpan: 2,
      //             alignment: 'left',
              
      //           },
      //           {},
      //         ],
      //         [
      //           { text: 'Cédula/NIT:', style: 'labelsTable', alignment: 'left' },
      //           { text: 'Teléfono Fijo o celular:', style: 'labelsTable', alignment: 'left' },
      //           { text: 'E-mail', style: 'labelsTable', alignment: 'left' },
      //         ],
      //         [
      //           {
      //             text: 'Dirección:',
      //             style: 'labelsTable',
      //             colSpan: 1,
      //             alignment: 'left',
               
      //           },
      //           {
      //             text: 'Ciudad',
      //             colSpan: 2,
      //             alignment: 'left',
      //             style: 'labelsTable',
              
      //           },
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Desea el cliente (excepto las piezas de garantía y aseguradora) conservar los repuestos de cambio:  Si  NO',
      //             style: 'labelsTable',
      //             colSpan: 3,
      //             alignment: 'center',
      //             width: 400,
      //             border: [true, true, true, false]
      //           },
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Me hago responsable de la disposición final en normatividad ambiental de estos respuestos, insumos. accesorio etc.',
      //             style: 'labelsTable',
      //             colSpan: 3,
      //             alignment: 'center',
      //             width: 400,
      //             border: [true, false, true, false]
      //           },
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Reparaciones y/o imprevistos adicionales serán notificados y bajo previa autoriación se realizarán',
      //             style: 'labelsTable',
      //             colSpan: 3,
      //             alignment: 'center',
               
      //           },
      //           {
      
              
      //           },
      //           {},
      //         ],
      //       ],
      //     },
      //     margin: [0, 0, 0, 15],
      //   },
       
      //   {
      //     margin: [2, 0, 0, 0],
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*', '*', '*', '*'],
      //       heights: ['auto',100, 100],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'EXTERIOR DEL VEHÍCULO',
      //             style: 'tablesHead',
      //             colSpan: 4,
      //             alignment: 'center',
      //           },
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Header 1',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             rowSpan: 2,
      //           },
      //           {
      //             text: 'Header 2',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //           },
      //           {
      //             text: 'Header 3',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //           },
      //           {
      //             text: 'Header 3',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             rowSpan: 2,
      //           },
      //         ],
      //         [
      //           {
                  
      //           },
      //           {
      //             text: 'Header 2',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //           },
      //           {
      //             text: 'Header 3',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //           },
      //           {
      //             text: 'Header 3',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //           },
      //         ],
      //       ],
      //     },
      //   },
      //   {
      //     margin: [2, 0, 0, 0],
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*', '*', '*'],
      //       heights: ['auto',120, 'auto', 'auto', 120, 'auto', 'auto'],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'REGISTRO FOTOGRÁFICO',
      //             style: 'tablesHead',
      //             colSpan: 3,
      //             alignment: 'center',
      //           },
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: ' ',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
        
      //           },
      //           {
      //             text: ' ',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [false, false, false, false]
      //           },
      //           {
      //             text: ' ',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
      //           },
      
      //         ],
      //         [
      //           {
      //             text: 'Observaciones',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false],
      //             margin: [0, 5, 0, 5],
      //           },
      //           {
      //             text: 'Observaciones',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [false, false, false, false],
      //             margin: [0, 5, 0, 5],
      //           },
      //           {
      //             text: 'Observaciones',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false],
      //             margin: [0, 5, 0, 5],
      //           },
      //         ],
      //         [
      //           {
      //             text: '___________________',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
      //           },
      //           {
      //             text: '___________________',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [false, false, false, false]
      //           },
      //           {
      //             text: '___________________',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
      //           },
      //         ],
      //         [
      //           {
      //             text: ' ',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
        
      //           },
      //           {
      //             text: ' ',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [false, false, false, false]
      //           },
      //           {
      //             text: ' ',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
      //           },
      
      //         ],
      //         [
      //           {
      //             text: 'Observaciones',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
      //           },
      //           {
      //             text: 'Observaciones',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [false, false, false, false]
      //           },
      //           {
      //             text: 'Observaciones',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, false]
      //           },
      //         ],
      //         [
      //           {
      //             text: '___________________',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, true],
      //             margin: [0, 5, 0, 5],
      //           },
      //           {
      //             text: '___________________',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [false, false, false, true],
      //             margin: [0, 5, 0, 5],
      //           },
      //           {
      //             text: '___________________',
      //             style: 'tableHeader',
      //             alignment: 'center',
      //             border: [true, false, true, true],
      //             margin: [0, 5, 0, 5],
      //           },
      //         ],
      //       ],
      //     },
      //   },
        
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     margin: [0, 0, 0, 5],
      //     // layout: 'noBorders',
      //     table: {
      //       widths: ['*'],
      //       heights: [60],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
           
      //         [{
      //           columns: [
      //            [
      //              {
      //                style: 'tableExample',
      //                color: '#444',
      //                margin: [0, 0, 0, 5],
      //                // layout: 'noBorders',
      //                table: {
      //                  widths: ['*'],
      //                  heights: [60],
      //                  headerRows: 1,
           
      //                  // keepWithHeaderRows: 1,
      //                  body: [
                      
      //                    [{ text: ' ', alignment: 'center',  fillColor: '#E9E9E9',}],
      //                  ],
      //                },
      //              },
      //            ],
      //            [
      //              {
      //                style: 'tableExample',
      //                color: '#444',
      //                margin: [0, 0, 0, 5],
      //                // layout: 'noBorders',
      //                table: {
      //                  widths: [80],
      //                  heights: [60],
      //                  headerRows: 1,
           
      //                  // keepWithHeaderRows: 1,
      //                  body: [
                      
      //                    [{ text: ' ', alignment: 'center',  fillColor: '#E9E9E9',}],
      //                  ],
      //                },
      //              },
      //            ],
                 
      //          ],
      //          margin: [0, 15],
      //        },],
      //       ],
      //     },
      //   },
        
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: [20, '*', 60, 50, 60],
      //       headerRows: 1,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'SOLICITUDES DEL CLIENTE',
      //             style: 'tablesHead',
      //             colSpan: 5,
      //             alignment: 'center',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           { text: 'Item',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Descripción',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Cargo cliente',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Cantidad',   style: 'labelsTable', alignment: 'center' },
      //           { text: 'Valor',   style: 'labelsTable', alignment: 'center'},
      //         ],
      //         [
      //           { text: '1',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '2',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '3',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '4',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '5',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           { text: '6',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           { text: '',   style: 'labelsTable', alignment: 'center' },
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'Subtotal:',
      //             style: 'labelsTable',
      //             colSpan: 5,
      //             alignment: 'left',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'IVA:',
      //             style: 'labelsTable',
      //             colSpan: 5,
      //             alignment: 'left',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //         [
      //           {
      //             text: 'TOTAL:',
      //             style: 'labelsTable',
      //             colSpan: 5,
      //             alignment: 'left',
      //           },
      //           {},
      //           {},
      //           {},
      //           {},
      //         ],
      //       ],
      //     },
      //     margin: [0, 15],
      //   },
      //   {
      //     ul: [
      //       'Order can be return in max 10 days.',
      //       'Warrenty of the product will be subject to the manufacturer terms and conditions.',
      //       'This is system generated invoice.',
      //     ],
      //   },
      //   {
      //     style: 'tableExample',
      //     color: '#444',
      //     // layout: 'noBorders',
      //     table: {
      //       widths: [200, 'auto', '*'],
      //       headerRows: 2,

      //       // keepWithHeaderRows: 1,
      //       body: [
      //         [
      //           {
      //             text: 'Header with Colspan = 2',
      //             style: 'tableHeader',
      //             colSpan: 2,
      //             alignment: 'center',
      //           },
      //           {},
      //           { text: 'Header 3', style: 'tableHeader', alignment: 'center' },
      //         ],
      //         [
      //           { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
      //           { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
      //           { text: 'Header 3', style: 'tableHeader', alignment: 'center' },
      //         ],
      //         ['Sample value 1', 'Sample value 2', 'Sample value 3'],
      //         [
      //           {
      //             rowSpan: 3,
      //             text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      //           },
      //           'Sample value 2',
      //           'Sample value 3',
      //         ],
      //         ['', 'Sample value 2', 'Sample value 3'],
      //         ['Sample value 1', 'Sample value 2', 'Sample value 3'],
      //         [
      //           'Sample value 1',
      //           {
      //             colSpan: 2,
      //             rowSpan: 2,
      //             text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time',
      //           },
      //           '',
      //         ],
      //         ['Sample value 1', '', ''],
      //       ],
      //     },
      //     margin: [0, 25],
      //   },
      // ],

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
        tablesHead: {
          alignment: 'center',
          fillColor: '#6C8695',
          fontSize: 12,
          color: '#ffffff',
          bold: true,
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
