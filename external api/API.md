general https://www.zybuluo.com/wxh90/note/1749128
store api https://www.zybuluo.com/wxh90/note/1791006

opple sample sku api: https://erp.yslcloud.com/process.aspx?action=load_dispgrid&pwd=480074992&billType=PRODUCT&incChild=true&parentId=0&sort=id&dir=ASC&incDisabled=false&start=0&limit=500&recCount=-1
category api: https://erp.yslcloud.com/process.aspx?action=load_dispgrid&pwd=480074992&billType=PRODUCT|0&incChild=false&parentId=0&sort=id&dir=ASC&incDisabled=false&start=0&limit=500&recCount=-1

{
    "success": true,
    "msg": null,
    "n": 9,
    "obj": {},
    "metaData": {
        "idProperty": "id",
        "successProperty": "success",
        "totalProperty": "n",
        "root": "tbl",
        "fields": [
            {
                "header": "id",
                "name": "id",
                "type": "float",
                "w": 0
            },
            {
                "header": "序号",
                "name": "rn",
                "w": 40,
                "id": 8519
            },
            {
                "header": "启用",
                "name": "enabled",
                "type": "boolean",
                "w": 0,
                "id": 8520
            },
            {
                "header": "is_spec",
                "name": "is_spec",
                "type": "float",
                "w": 0,
                "id": 48249
            },
            {
                "header": "图片",
                "name": "img_tag",
                "id": 13505
            },
            {
                "header": "color",
                "name": "color",
                "type": "float",
                "w": 0,
                "id": 12774
            },
            {
                "header": "商品编号",
                "name": "code",
                "id": 8522
            },
            {
                "header": "商品名称",
                "name": "name",
                "w": 240,
                "id": 8523
            },
            {
                "header": "采购价格",
                "name": "buy_price",
                "type": "float",
                "id": 8537,
                "amt": true
            },
            {
                "header": "零售价",
                "name": "price0",
                "type": "float",
                "id": 8538,
                "amt": true
            },
            {
                "header": "实价",
                "name": "txt1",
                "id": 50349
            },
            {
                "header": "品类",
                "name": "txt2",
                "id": 50350
            },
            {
                "hlp": "wms模块配货时优先从存储区配整箱的商品",
                "header": "整箱数量",
                "name": "box_qty",
                "type": "float",
                "id": 51921
            },
            {
                "header": "规格",
                "name": "spec",
                "id": 8566
            },
            {
                "header": "商品条码",
                "name": "barcode",
                "id": 50317
            },
            {
                "header": "计量单位",
                "name": "unit",
                "id": 8526
            },
            {
                "header": "单位关系",
                "name": "units",
                "w": 0,
                "id": 15660
            },
            {
                "header": "主供应商编号",
                "name": "main_supplier_code",
                "id": 34
            },
            {
                "header": "主供应商",
                "name": "main_supplier",
                "id": 8529,
                "edit_type": "B"
            },
            {
                "id": 52098,
                "header": "上柜日期",
                "edit_type": "D",
                "name": "open_date",
                "w": -1,
                "type": "date"
            },
            {
                "header": "品牌名称",
                "name": "brand",
                "id": 8530,
                "edit_type": "B"
            },
            {
                "header": "默认仓库编码",
                "name": "def_warehouse_id",
                "type": "float",
                "w": -1,
                "id": 27166
            },
            {
                "header": "存货属性",
                "name": "cat",
                "w": 0,
                "id": 9224,
                "edit_type": "L"
            },
            {
                "header": "商品组",
                "name": "product_group",
                "id": 8531,
                "edit_type": "B"
            },
            {
                "header": "型号",
                "name": "model",
                "id": 8567
            },
            {
                "header": "产地",
                "name": "made_in",
                "id": 8568
            },
            {
                "header": "重量(千克)",
                "name": "weight",
                "type": "float",
                "id": 8532
            },
            {
                "header": "体积(立方米)",
                "name": "volume",
                "type": "float",
                "id": 8533
            },
            {
                "header": "采购周期(天)",
                "name": "buy_days",
                "type": "float",
                "id": 8562
            },
            {
                "header": "fb",
                "name": "force_batch",
                "type": "float",
                "w": 0,
                "id": 49969
            },
            {
                "header": "兑换所需积分",
                "name": "point_r",
                "type": "float",
                "id": 8565
            },
            {
                "header": "退市",
                "name": "txt3",
                "id": 50351
            },
            {
                "header": "采购扣率",
                "name": "discount_rateb",
                "type": "float",
                "w": 0,
                "id": 13830
            },
            {
                "header": "销售扣率",
                "name": "discount_rate",
                "type": "float",
                "w": 0,
                "id": 13818
            },
            {
                "header": "税率%",
                "name": "tax_pct",
                "type": "float",
                "w": 0,
                "id": 49447
            },
            {
                "header": "默认采购单位",
                "name": "buy_unit",
                "w": 0,
                "id": 50298,
                "edit_type": "Q"
            },
            {
                "header": "默认销售单位",
                "name": "sell_unit",
                "w": 0,
                "id": 50299,
                "edit_type": "Q"
            },
            {
                "header": "分销价",
                "name": "price1",
                "type": "float",
                "id": 8539,
                "amt": true
            },
            {
                "header": "预售价2",
                "name": "price2",
                "type": "float",
                "id": 8540,
                "amt": true
            },
            {
                "header": "预售价3",
                "name": "price3",
                "type": "float",
                "id": 8541,
                "amt": true
            },
            {
                "header": "预售价4",
                "name": "price4",
                "type": "float",
                "id": 8542,
                "amt": true
            },
            {
                "header": "预售价5",
                "name": "price5",
                "type": "float",
                "id": 8543,
                "amt": true
            },
            {
                "header": "预售价6",
                "name": "price6",
                "type": "float",
                "id": 8544,
                "amt": true
            },
            {
                "header": "预售价7",
                "name": "price7",
                "type": "float",
                "id": 8545,
                "amt": true
            },
            {
                "header": "预售价8",
                "name": "price8",
                "type": "float",
                "id": 8546,
                "amt": true
            },
            {
                "header": "预售价9",
                "name": "price9",
                "type": "float",
                "id": 8547,
                "amt": true
            },
            {
                "header": "备注",
                "name": "comment",
                "id": 8549
            },
            {
                "header": "1级分类",
                "name": "level1",
                "id": 66569
            },
            {
                "header": "2级分类",
                "name": "level2",
                "id": 66570
            },
            {
                "header": "3级分类",
                "name": "level3",
                "id": 66571
            },
            {
                "header": "4级分类",
                "name": "level4",
                "id": 66572
            }
        ]
    },
    "tbl": [
        {
            "id": 5616302,
            "rn": "1→",
            "enabled": true,
            "is_spec": 0,
            "code": "01",
            "name": "欧普照明",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 5616304,
            "rn": "2→",
            "enabled": true,
            "is_spec": 0,
            "code": "03",
            "name": "软装产品",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 5619845,
            "rn": "3→",
            "enabled": true,
            "is_spec": 0,
            "code": "02",
            "name": "非欧普",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 5623376,
            "rn": "4→",
            "enabled": true,
            "is_spec": 0,
            "code": "04",
            "name": "流通产品",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 5729948,
            "rn": "5→",
            "enabled": true,
            "is_spec": 0,
            "code": "05",
            "name": "办公用品",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 5730208,
            "rn": "6→",
            "enabled": true,
            "is_spec": 0,
            "code": "06",
            "name": "固定资产",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 7314528,
            "rn": "7→",
            "enabled": true,
            "is_spec": 0,
            "code": "07",
            "name": "集品商贸",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 10624305,
            "rn": "8→",
            "enabled": true,
            "is_spec": 0,
            "code": "08",
            "name": "淘宝专用",
            "buy_days": 1,
            "force_batch": 0
        },
        {
            "id": 11246115,
            "rn": "9→",
            "enabled": true,
            "is_spec": 0,
            "code": "09",
            "name": "HOMEHOME",
            "buy_days": 1,
            "force_batch": 0
        }
    ]
}

