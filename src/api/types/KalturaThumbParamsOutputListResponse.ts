
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaThumbParamsOutputListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaThumbParamsOutputListResponse extends KalturaListResponse {

    readonly objects : KalturaThumbParamsOutput[];

    constructor(data? : KalturaThumbParamsOutputListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaThumbParamsOutputListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaThumbParamsOutput, subType : 'KalturaThumbParamsOutput' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParamsOutputListResponse',KalturaThumbParamsOutputListResponse);
