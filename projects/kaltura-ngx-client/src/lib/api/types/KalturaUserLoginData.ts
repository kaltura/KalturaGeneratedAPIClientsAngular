
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserLoginDataArgs  extends KalturaObjectBaseArgs {
    id? : string;
	loginEmail? : string;
}


export class KalturaUserLoginData extends KalturaObjectBase {

    id : string;
	loginEmail : string;

    constructor(data? : KalturaUserLoginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserLoginData' },
				id : { type : 's' },
				loginEmail : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserLoginData'] = KalturaUserLoginData;