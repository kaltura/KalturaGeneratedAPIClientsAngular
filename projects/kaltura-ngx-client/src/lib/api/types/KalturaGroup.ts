
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserType } from './KalturaUserType';
import { KalturaUser, KalturaUserArgs } from './KalturaUser';

export interface KalturaGroupArgs  extends KalturaUserArgs {
    type? : KalturaUserType;
}


export class KalturaGroup extends KalturaUser {

    type : KalturaUserType;
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
				type : { type : 'en', subTypeConstructor : KalturaUserType, subType : 'KalturaUserType' },
				membersCount : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroup'] = KalturaGroup;