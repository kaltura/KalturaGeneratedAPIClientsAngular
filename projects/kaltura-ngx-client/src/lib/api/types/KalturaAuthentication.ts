
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAuthenticationArgs  extends KalturaObjectBaseArgs {
    qrCode? : string;
}


export class KalturaAuthentication extends KalturaObjectBase {

    qrCode : string;

    constructor(data? : KalturaAuthenticationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuthentication' },
				qrCode : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAuthentication'] = KalturaAuthentication;