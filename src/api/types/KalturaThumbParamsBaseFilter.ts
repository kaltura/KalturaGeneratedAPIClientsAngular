
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';

export interface KalturaThumbParamsBaseFilterArgs  extends KalturaAssetParamsFilterArgs {
    formatEqual? : KalturaContainerFormat;
}


export class KalturaThumbParamsBaseFilter extends KalturaAssetParamsFilter {

    formatEqual : KalturaContainerFormat;

    constructor(data? : KalturaThumbParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbParamsBaseFilter' },
				formatEqual : { type : 'es', subTypeConstructor : KalturaContainerFormat, subType : 'KalturaContainerFormat' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParamsBaseFilter',KalturaThumbParamsBaseFilter);
