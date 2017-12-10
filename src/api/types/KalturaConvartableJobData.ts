
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSourceFileSyncDescriptor } from './KalturaSourceFileSyncDescriptor';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaConvartableJobDataArgs  extends KalturaJobDataArgs {
    srcFileSyncLocalPath? : string;
	actualSrcFileSyncLocalPath? : string;
	srcFileSyncRemoteUrl? : string;
	srcFileSyncs? : KalturaSourceFileSyncDescriptor[];
	engineVersion? : number;
	flavorParamsOutputId? : number;
	flavorParamsOutput? : KalturaFlavorParamsOutput;
	mediaInfoId? : number;
	currentOperationSet? : number;
	currentOperationIndex? : number;
	pluginData? : KalturaKeyValue[];
}


export class KalturaConvartableJobData extends KalturaJobData {

    srcFileSyncLocalPath : string;
	actualSrcFileSyncLocalPath : string;
	srcFileSyncRemoteUrl : string;
	srcFileSyncs : KalturaSourceFileSyncDescriptor[];
	engineVersion : number;
	flavorParamsOutputId : number;
	flavorParamsOutput : KalturaFlavorParamsOutput;
	mediaInfoId : number;
	currentOperationSet : number;
	currentOperationIndex : number;
	pluginData : KalturaKeyValue[];

    constructor(data? : KalturaConvartableJobDataArgs)
    {
        super(data);
        if (typeof this.srcFileSyncs === 'undefined') this.srcFileSyncs = [];
		if (typeof this.pluginData === 'undefined') this.pluginData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvartableJobData' },
				srcFileSyncLocalPath : { type : 's' },
				actualSrcFileSyncLocalPath : { type : 's' },
				srcFileSyncRemoteUrl : { type : 's' },
				srcFileSyncs : { type : 'a', subTypeConstructor : KalturaSourceFileSyncDescriptor, subType : 'KalturaSourceFileSyncDescriptor' },
				engineVersion : { type : 'n' },
				flavorParamsOutputId : { type : 'n' },
				flavorParamsOutput : { type : 'o', subTypeConstructor : KalturaFlavorParamsOutput, subType : 'KalturaFlavorParamsOutput' },
				mediaInfoId : { type : 'n' },
				currentOperationSet : { type : 'n' },
				currentOperationIndex : { type : 'n' },
				pluginData : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConvartableJobData',KalturaConvartableJobData);
