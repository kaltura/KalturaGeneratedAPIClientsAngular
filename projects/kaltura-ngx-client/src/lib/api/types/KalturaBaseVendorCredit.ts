
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseVendorCreditArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseVendorCredit extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseVendorCreditArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseVendorCredit' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseVendorCredit'] = KalturaBaseVendorCredit;