
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseVendorCredit, KalturaBaseVendorCreditArgs } from './KalturaBaseVendorCredit';

export interface KalturaVendorCreditArgs  extends KalturaBaseVendorCreditArgs {
    credit? : number;
	fromDate? : Date;
	overageCredit? : number;
	addOn? : number;
}


export class KalturaVendorCredit extends KalturaBaseVendorCredit {

    credit : number;
	fromDate : Date;
	overageCredit : number;
	addOn : number;

    constructor(data? : KalturaVendorCreditArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCredit' },
				credit : { type : 'n' },
				fromDate : { type : 'd' },
				overageCredit : { type : 'n' },
				addOn : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCredit'] = KalturaVendorCredit;