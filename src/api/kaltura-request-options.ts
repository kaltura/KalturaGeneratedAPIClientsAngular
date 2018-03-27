
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';
import { InjectionToken } from '@angular/core';

export const KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS: InjectionToken<KalturaRequestOptionsArgs> = new InjectionToken('kaltura client default request options');

export interface KalturaRequestOptionsArgs  extends KalturaObjectBaseArgs {
    acceptedTypes? : {new(...args: any[]) : KalturaObjectBase}[];
	partnerId? : number;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
}


export class KalturaRequestOptions extends KalturaObjectBase {

    acceptedTypes : {new(...args: any[]) : KalturaObjectBase}[];
	partnerId : number;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;

    constructor(data? : KalturaRequestOptionsArgs)
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
