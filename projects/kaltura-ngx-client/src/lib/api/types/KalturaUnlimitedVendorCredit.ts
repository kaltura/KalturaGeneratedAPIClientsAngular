
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseVendorCredit, KalturaBaseVendorCreditArgs } from './KalturaBaseVendorCredit';

export interface KalturaUnlimitedVendorCreditArgs  extends KalturaBaseVendorCreditArgs {
    fromDate? : Date;
}


export class KalturaUnlimitedVendorCredit extends KalturaBaseVendorCredit {

    readonly credit : number;
	fromDate : Date;

    constructor(data? : KalturaUnlimitedVendorCreditArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnlimitedVendorCredit' },
				credit : { type : 'n', readOnly : true },
				fromDate : { type : 'd' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUnlimitedVendorCredit'] = KalturaUnlimitedVendorCredit;