
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUiConfListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUiConfListResponse extends KalturaListResponse {

    readonly objects : KalturaUiConf[];

    constructor(data? : KalturaUiConfListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUiConfListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUiConf, subType : 'KalturaUiConf' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUiConfListResponse',KalturaUiConfListResponse);
