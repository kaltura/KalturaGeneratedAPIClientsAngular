
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchUserResult } from './KalturaESearchUserResult';
import { KalturaESearchResponse, KalturaESearchResponseArgs } from './KalturaESearchResponse';

export interface KalturaESearchUserResponseArgs  extends KalturaESearchResponseArgs {
    
}


export class KalturaESearchUserResponse extends KalturaESearchResponse {

    readonly objects : KalturaESearchUserResult[];

    constructor(data? : KalturaESearchUserResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchUserResult, subType : 'KalturaESearchUserResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserResponse',KalturaESearchUserResponse);
