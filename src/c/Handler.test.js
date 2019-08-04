import Handler from "./Handler";
import Key from "./Key";

describe('', () => {
    const handler = new Handler();
    beforeAll(()=>{
        handler.parse(raw);
    });

    it('current map', () => {
        expect(handler.map).toMatchSnapshot();
    });

    it('get raw node "config,menu"', () => {
        const key = new Key();
        key.value = 'config,menu';
        expect(handler.get_raw_node(key)).toMatchSnapshot();
        expect(handler.get_raw_node('config,menu')).toMatchSnapshot();
    });

    it('get node "config,menu"', () => {
        const key = new Key();
        key.value = 'config,menu';
        expect(handler.get_node(key)).toMatchSnapshot();
        expect(handler.get_node('config,menu')).toMatchSnapshot();
    });

    it('get node "config,menu,undefined"', () => {
      const key = new Key();
      const kValue = 'config,menu,undefined';
      key.value = kValue;
      expect(handler.get_node(key)).toMatchSnapshot();
      expect(handler.get_node(kValue)).toMatchSnapshot();
  });

    it('get node "config,menu,web" base rule', () => {
        const key = new Key();
        key.value = 'config,menu,WEB';
        expect(handler.get(key)).toMatchSnapshot();
        expect(handler.get('config,menu,WEB')).toMatchSnapshot();


        const ctx = ['prj1'];
        expect(handler.get(key, ctx)).toMatchSnapshot();
    });

});



const raw = [
    {
      "title": "menu",
      "expanded": true,
      "children": [
        {
          "title": "SERVICE",
          "active": true
        },
        {
          "title": "BOT",
          "active": true
        },
        {
          "title": "CONFIG",
          "expanded": true,
          "active": true
        }
      ]
    },
    {
      "title": "config",
      "expanded": true,
      "children": [
        {
          "title": "menu",
          "expanded": false,
          "children": [
            {
              "title": "WEB",
              "r": [
                {
                  "on": true,
                  "base": "LIT"
                },
                {
                  "_": [
                    "prj1"
                  ],
                  "base": "OTHER"
                }
              ],
              "active": true
            },
            {
              "title": "APP",
              "r": [
                {
                  "on": true,
                  "base": "LIT"
                }
              ],
              "expanded": true,
              "active": true
            },
            {
              "title": "API",
              "active": true
            },
            {
              "title": "MISC",
              "active": true
            }
          ]
        }
      ]
    }
];