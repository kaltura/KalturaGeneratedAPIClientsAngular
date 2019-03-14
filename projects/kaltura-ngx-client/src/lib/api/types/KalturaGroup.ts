
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseUser, KalturaBaseUserArgs } from './KalturaBaseUser';

export interface KalturaGroupArgs  extends KalturaBaseUserArgs {
    
}


export class KalturaGroup extends KalturaBaseUser {

    readonly membersCount : number;

    constructor(data? : KalturaGroupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroup' },
				membersCount : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroup'] = KalturaGroup;