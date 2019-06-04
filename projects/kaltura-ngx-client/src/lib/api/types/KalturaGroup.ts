
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGroupProcessStatus } from './KalturaGroupProcessStatus';
import { KalturaBaseUser, KalturaBaseUserArgs } from './KalturaBaseUser';

export interface KalturaGroupArgs  extends KalturaBaseUserArgs {
    processStatus? : KalturaGroupProcessStatus;
}


export class KalturaGroup extends KalturaBaseUser {

    readonly membersCount : number;
	processStatus : KalturaGroupProcessStatus;

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
				membersCount : { type : 'n', readOnly : true },
				processStatus : { type : 'en', subTypeConstructor : KalturaGroupProcessStatus, subType : 'KalturaGroupProcessStatus' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroup'] = KalturaGroup;