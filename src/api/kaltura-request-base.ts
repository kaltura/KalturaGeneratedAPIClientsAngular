
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';

export interface KalturaRequestBaseArgs  extends KalturaObjectBaseArgs {
    acceptedTypes? : {new(...args) : KalturaObjectBase}[];
	partnerId? : number;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
}


export class KalturaRequestBase extends KalturaObjectBase {

    acceptedTypes : {new(...args) : KalturaObjectBase}[];
	partnerId : number;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;

    constructor(data : KalturaRequestBaseArgs)
    {
        super(data);
        if (typeof this.acceptedTypes === 'undefined') this.acceptedTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                apiVersion : { type : 'c', default : '3.3.0' },
				partnerId : { type : 'n' },
				ks : { type : 's' },
				responseProfile : { type : 'o', subTypeConstructor : KalturaBaseResponseProfile, subType : 'KalturaBaseResponseProfile' }
            }
        );
        return result;
    }
}

